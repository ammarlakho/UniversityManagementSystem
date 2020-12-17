const { request } = require('express');
const express = require('express');
const route = express.Router();
const services = require('../services/render');
const studentController = require('../controller/studentController');

route.get('/', services.homeRoutes);

route.get('/add-user', services.add_user);


// APIs
route.post('/api/students', studentController.create);
route.get('/api/students', studentController.find);
route.put('/api/students/:id', studentController.update);
route.delete('/api/students/:id', studentController.delete);


module.exports = route

