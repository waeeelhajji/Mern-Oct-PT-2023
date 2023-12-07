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

//? Read One

module.exports.FindOneSingleStudent = (req, res) => {
    StudentSchema.findOne({ _id: req.params.StudentId })
        .then(oneSingleStudent => {
            res.json(oneSingleStudent)
        })
        .catch((err) => {
            res.json(err)
        })
}


//? DELETE

module.exports.deleteAnExistingStudent = (req, res) => {
    StudentSchema.deleteOne({ _id: req.params.StudentId })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        })
}

//? UPDATE

module.exports.updateExistingStudent = (req, res) => {
    console.log(req.body);
    StudentSchema.findOneAndUpdate({ _id: req.params.StudentId }, req.body, { new: true, runValidators: true })
        .then(result => {
            res.json({ "done": result })
        })
        .catch((err) => {
            res.json(err)
        })

}