const express = require('express');
const App = require('../models/app.model')
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroExpress = require('@admin-bro/express')
const mongoose = require('mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const AdminBroOptions = {
  resources: [App],
  Databases: [mongoose],
  rootPath: '/admin',
}
const adminBro = new AdminBro(AdminBroOptions)
const adminrouter = AdminBroExpress.buildRouter(adminBro)


module.exports = adminrouter