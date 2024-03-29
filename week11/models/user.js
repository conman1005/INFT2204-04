const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://conman1005:Cjccjc12!@mydb.pp82h84.mongodb.net/College');

// mongoose.set('useCreateIndex', true);

// declare Schema
let Schema = mongoose.Schema;


// User schema
let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    isActive: {
        type: Boolean,
        default: true
    },
    friends: [String],
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    }
}, {
    collection: 'users'
});

// Export schemas as models
module.exports.User = mongoose.model('users', userSchema);