const Mongoose = require("mongoose");

const EmployeeSchema = Mongoose.Schema(
    {
        Name : String,
        Location : String,
        Designation : String,
        Salary : {
            type : Number,
            requied : true
        }
    }
) ;
const EmployeeModel = Mongoose.model("Employees",EmployeeSchema);

module.exports = EmployeeModel;