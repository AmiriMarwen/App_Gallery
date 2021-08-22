const express = require("express");
const router = express.Router();
const App = require("../models/app.model");

// Main API Front-end Page
router.get("/", (req, res) => {
  res.json({ message: "🎉 🥉 this is api Main Front-end 🥉 🎉" });
});

// Get All Apps From Mongo DB-Atlas
router.get("/apps", async (req, res) => {
  const allApps = await App.find();
  res.json(allApps);
});

// Post Single App to Mongo DB-Atlas
router.post("/apps", async (req, res, next) => {
  try {
    await App.save(req.body);
    res.json({ message: "New App Created" });
  } catch (error) {
    next(error);
  }
});

// Get one App By Id From Mongo DB-Atlas
router.get("/app/:id", async (req, res) => {
  await App.findOne({ _id: req.params.id })
    .then((app) => res.json(app))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get one All Apps with specific Category
router.get("/apps/:category", async (req, res) => {
  const appsByCategory = await App.find({ Category: req.params.category });
  res.json(appsByCategory);
});

// Updating One App By Id From Mongo DB-Atlas
router.put("/app/:id", async (req, res) => {
  const updates = req.body;
  await App.findOneAndUpdate({ _id: req.params.id }, updates, { new: true })
    .then((updatedapp) => res.json(updatedapp))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete App By Id From Mongo DB-Atlas
router.delete("/app/delete/:id", (req, res) => {
  App.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "This App Deleted From Db 😑" }))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
