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

exports.add_user = (req, res) => {
    res.render('add_user.ejs');
}

