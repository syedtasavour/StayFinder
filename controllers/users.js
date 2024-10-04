const User = require("../models/user.js");

//Render signup Form
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

//signup Route
module.exports.signUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registredUser = await User.register(newUser, password);
    console.log(registredUser);
    req.login(registredUser, (err) => {
      if (err) {
        next();
      }
      req.flash("success", "welcome to stayfinder");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

//Render Login Form
module.exports.renderloginForm = (req, res) => {
  res.render("users/login.ejs");
};

//login Route
module.exports.logIn = async (req, res) => {
  req.flash("success", "welcome back to stayfinder");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};
//Logout Route

module.exports.logOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out now");
    res.redirect("/listings");
  });
};
