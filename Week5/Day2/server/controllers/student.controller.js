const StudentSchema = require("../models/model.student")



// Read All

module.exports.FindAllStudent = (req, res) => {
    // db.student.find()
    StudentSchema.find()
        .then((AllStudents) => {
            console.log(AllStudents)
            res.json({ AllStudents })
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄" }) })

}