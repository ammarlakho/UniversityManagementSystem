const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    coursesTaken: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course"
        }
    ]

})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;