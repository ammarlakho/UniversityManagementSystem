const axios = require('axios');



exports.homeRoutes = (req, res) => {
    // Make a get request to /api/students
    axios.get('http://localhost:3000/api/students')
        .then(function(response) {
            // console.log(response.data)
            res.render('index.ejs', {students: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}


exports.teacherPage = (req, res) => {
    // Make a get request to /api/students
    axios.get('http://localhost:3000/api/teachers')
        .then(function(response) {
            // console.log(response.data)
            res.render('teachersPage.ejs', {teachers: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}

exports.coursesPage = (req, res) => {
    // Make a get request to /api/students
    axios.get('http://localhost:3000/api/courses')
        .then(function(response) {
            // console.log(response.data)
            res.render('coursesPage.ejs', {courses: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}

exports.add_student = (req, res) => {
    res.render('add_student.ejs');
}
exports.update_student = (req, res) => {
    axios.get('http://localhost:3000/api/students', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("update_student.ejs", { student : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.add_teacher = (req, res) => {
    res.render('add_teacher.ejs');
}
exports.update_teacher = (req, res) => {
    axios.get('http://localhost:3000/api/teachers', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("update_teacher.ejs", { teacher : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}


