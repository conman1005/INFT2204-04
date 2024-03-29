const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/student", {
    
}, function(error) {
    if (error) {
        console.error(error);
    } else {

    }
}*/);

moongoose.set('useCreateIndex', true);
let Schema = mongoose.Schema;

let studentSchema = new Schema({
    studentId: Number,
    firstName: String,
    lastName: String
}, {
    collection: 'students'
});

// Export Schema as Models
module.exports.Student = mongoose.model('student', studentSchema);