if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
  console.log(process.env.CLOUD_NAME);
};


const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user.js");

const ListingRouter = require("./routes/listing.js");
const ReviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const DB_URL = process.env.DB_URL;

main()
  .then(() => console.log("Connected to DB!"))
  .catch((error) => {
    console.log(error);
  });

// Connect to MongoDB
async function main() {
  await mongoose.connect(DB_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set up view engine and static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

const store = MongoStore.create({
  mongoUrl : DB_URL,
  crypto:{
    secret:process.env.SECRET,
    touchAfter:24*3600,
  }
});

store.on('err',()=>{
  console.log('error in mongo session store',err);
})

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.get("/", (req,res) => {
  res.redirect("/listings");
});


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// app.get("/demouser",async(req,res)=>{
//   let fakeUser = new User({
//     email: "user@stayfinder.com",
//     username: "stayFinder-admin"
//   });
//   let registeredUser = await User.register(fakeUser,"fakePasss");
//   res.send(registeredUser);
// });

//Listing route
app.use("/listings", ListingRouter);
app.use("/Listings/:id/reviews", ReviewRouter);
app.use("/", userRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// midleware
app.use((err, req, res, next) => {
  let { message = "Something Went Wrong", statusCode = 500 } = err;
  res.status(statusCode).render("listings/error", { message });
});

// Start the server
app.listen("8080", () => {
  console.log("Server is listening on port 8080");
});
