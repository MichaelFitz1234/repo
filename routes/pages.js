const express = require('express')
const router = express.Router();
router.get("/", (req,res) =>{
    res.render("index")
  });
 router.get("/register", (req,res) =>{
    res.render("register")

  });
  router.get("/login", (req,res) =>{
    res.render("login")

  });
  router.get("/homePage", (req,res) =>{
    res.render("homePage")

  });
  router.get("/contactUs", (req,res) =>{
    res.render("contactUs")

  });
  router.get("/featured", (req,res) =>{
    res.render("featured")
  });
  module.exports = router;
  