const StudentController = require("../controllers/student.controller")



module.exports = (app) => {
    app.get("/api/student", StudentController.FindAllStudent)
    app.post("/api/student", StudentController.CreateNewStudent)

}