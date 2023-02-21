/*
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", async (req, res, next) => {
  try {
    const foundCelebs = await Celebrity.find();
    res.render("celebrities/celebrities.hbs", { celebsList: foundCelebs });
  } catch (error) {
    console.log(error);
  }
});

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});

router.post("/celebrities/create", async (req, res) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (error) {
    console.log(error);
    res.render("celebrities/new-celebrity.hbs");
  }
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", async (req, res, next) => {
  try {
    const foundCelebs = await Celebrity.find();
    res.render("celebrities/celebrities.hbs", { celebsList: foundCelebs });
  } catch (error) {
    console.log(error);
  }
});

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});

router.post("/celebrities/create", async (req, res) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (error) {
    console.log(error);
    res.render("celebrities/new-celebrity.hbs");
  }
});

module.exports = router;

