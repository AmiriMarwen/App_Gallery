const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const AdminBroExpress = require("@admin-bro/express");
const mongoose = require("mongoose");
const theme = require("admin-bro-theme-dark");
// importing MongoDb models
const App = require("../../models/app.model");
const User = require("../../models/user.model");

const ADMIN = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

AdminBro.registerAdapter(AdminBroMongoose);

const AdminBroOptions = {
  resources: [App],
  Databases: [mongoose],
  rootPath: "/admin",
  branding: {
    theme,
    logo: "",
    companyName: "AppGallery",
  },
};

const adminBro = new AdminBro(AdminBroOptions);
const adminrouter = AdminBroExpress.buildAuthenticatedRouter(
  adminBro,
  {
    authenticate: async (email, password) => {
      if (ADMIN.password === password && ADMIN.email === email) {
        return ADMIN;
      }
      return null;
    },
    cookieName: process.env.COOKIE_NAME,
    cookiePassword: process.env.COOKIE_PASSWORD,
  },
  null,
  {
    resave: false,
    saveUninitialized: true,
  }
);

module.exports = adminrouter;
