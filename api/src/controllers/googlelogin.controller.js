const server = require("express").Router();
const { User, conn } = require("../db.js");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
const bcrypt = require("bcryptjs");
const { login } = require("./auth.controller");

const loginGoogle = async (req, res) => {
  const { token } = req.body;
  //console.log("I'm the freaking token", token);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { given_name, family_name, email, sub } = ticket.getPayload();
  //console.log("payload:", ticket.getPayload());
  //console.log("el email:", email)
  const hashedPassword = bcrypt.hash(sub, 10);
  const user = await User.findOrCreate({
    defaults: {
      name: given_name,
      surname: family_name,
      admin: false,
      email: email,
      username: email, //el email es unico, mejor ese campo
      password: (await hashedPassword).toString(), //cambiar a null - ver hashSync
    },
    where: {
      email: email,
    },
  });
  res.json(user);
  //req.session.userId = User.id; //user o User??????
  //console.log("soy el user creado", user)

  // await login(user, user[0]),
  //   (err) => {
  //     console.log("req del await login", user);
  //     if (err) throw err;
  //     console.log("enviando", user);
  //     res.status(200).json({
  //       msg: "Successfully Authenticated",
  //       admin: req.user.dataValues.admin,
  //       name: req.user.dataValues.name,
  //       id: req.user.dataValues.id,
  //     });
  //   };
  // res.status(201);
  // res.json(user);
};

// Check authentication middleware

const authentication = async (req, res, next) => {
  const user = await db.user.findFirst({ where: { id: req.session.userId } });
  req.user = user;
  next();
};

// Sign out route

const deleteLogin = async (req, res) => {
  await req.session.destroy();
  res.status(200);
  res.json({
    message: "Logged out successfully",
  });
};

// "Me" route

const me = async (req, res) => {
  res.status(200);
  res.json(req.user);
};

module.exports = { loginGoogle, authentication, deleteLogin, me };
