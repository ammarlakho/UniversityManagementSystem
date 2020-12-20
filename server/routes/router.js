const { request } = require('express');
const express = require('express');
const route = express.Router();
const services = require('../services/render');
const studentController = require('../controller/studentController');
const teacherController = require('../controller/teacherController');

// Main Pages
route.get('/', services.homeRoutes);//Home route is student page
route.get('/teachers', services.teacherPage);
route.get('/courses', services.coursesPage);

// Forms
route.get('/add-student', services.add_student);
route.get('/update-student', services.update_student);

route.get('/add-teacher', services.add_teacher);
route.get('/update-teacher', services.update_teacher);


// Student APIs
route.post('/api/students', studentController.create);
route.get('/api/students', studentController.find);
route.put('/api/students/:id', studentController.update);
route.delete('/api/students/:id', studentController.delete);

// Teacher APIs
route.post('/api/teachers', teacherController.create);
route.get('/api/teachers', teacherController.find);
route.put('/api/teachers/:id', teacherController.update);
route.delete('/api/teachers/:id', teacherController.delete);

module.exports = route

