const StudentSchema = require("../models/model.student")



//? Read All

module.exports.FindAllStudent = (req, res) => {
    // db.student.find()
    StudentSchema.find()
        .then((AllStudents) => {
            console.log(AllStudents)
            res.json(AllStudents)
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄" }) })
}



//? Create

module.exports.CreateNewStudent = (req, res) => {
    // db.student.insertOne({fistName:65454})
    console.log(req.body)
    StudentSchema.create(req.body)
        .then(CreateStudent => {
            console.log(CreateStudent)
            res.json({ newStudent: CreateStudent })
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄", err }) })
}
