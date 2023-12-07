const StudentController = require("../controllers/student.controller")



module.exports = (app) => {
    app.get("/api/student", StudentController.FindAllStudent)
    app.get("/api/student/:StudentId", StudentController.FindOneSingleStudent)
    app.patch("/api/student/:StudentId", StudentController.updateExistingStudent)
    app.post("/api/student", StudentController.CreateNewStudent)
    app.delete("/api/student/:StudentId", StudentController.deleteAnExistingStudent)
}