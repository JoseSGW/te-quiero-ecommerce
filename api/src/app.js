const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");
const passport = require("./config/passportConfig");
const session = require("express-session");
require("./db.js");

const server = express();
//Poner el config por arriba de todos, con la segunda parte se lo pasamos a config

const { SESSION_SECRET } = process.env;
server.use(express.json());

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser("secret"));
server.use(morgan("dev"));
server.use((req, res, next) => {
  //console.log("estoy logeado", req.isAuthenticated());
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

server.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
