const Mongoose = require("mongoose");

const UserSchema = Mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        Email : {
            type : String,
            required : true,
            unique : true
        },
        Password : {
            type : String,
            required : true
        }
    }
);

const UserModel = Mongoose.model("Users",UserSchema);

module.exports = UserModel;