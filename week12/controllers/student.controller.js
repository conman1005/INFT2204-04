const studentModel =  require('../models/student');

function loadStudentData(req, res) {
    studentModel.Student.find({}).then(function(studentList) {
        console.log(studentList);
        res.render('', {
            pageTitle: "INFT2202 - Student Class List",
            students: studentList
        });
    });
}

/**
 * render student view
 * @param {*} req 
 * @param {*} res 
 */
function studentView(req, res) {
    // render student view
    res.render('./pages/student', {
        pageTitle: "INFT 2202 - Student View"
    });
    loadStudentData(req, res);
}

module.exports = {
    studentView
};