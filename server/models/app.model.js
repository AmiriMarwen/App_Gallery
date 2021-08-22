const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    Type: { type: String, enum: ["Application", "Game"], required: true },
    Category: { type: String, required: true },
    Logo: { type: String, required: true },
    Version: { type: String, required: true },
    Size: { type: Number, required: true },
    AndroidVersion: { type: Number, required: true },
    Description: { type: String, required: true },
    Developer: { type: String, required: true },
    Price: { type: String, default: "Free", required: false },
    Trusted: { type: Boolean, default: "true", required: false },
    Rating: { type: Number, min: 0, max: 5, default: 0, required: false },
    NumberOfDownloads: { type: Number, required: true },
    DownloadLink: { type: String, required: true },
    Screens: [{ type: String }],
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("App", applicationSchema);
