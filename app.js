const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const multer = require("multer");
const upload = multer({ dest: "./public/uploads" });

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const contactRouter = require("./routes/contact");
const adminRouter = require("./routes/admin");

const app = express();

// view engine setup
// here we using jade we can use any
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//below are all middleware which has app.use
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); //this is buildin middleware function

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/contact", contactRouter);

//for file upload from multer
app.post(
  "/upload",
  upload.single("image"),
  (req, res, next) => {
    console.log(req.file);
    res.send(req.file);
  },
  (err, req, res, next) => {
    res.status(400).send({ Error: "error" });
  }
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
