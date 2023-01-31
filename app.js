const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const Cors = require("cors");
const Bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const app = new Express();
const EmployeeModel = require("./model/employee");
const UserModel =  require("./model/users");

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(Cors());

Mongoose.connect("mongodb+srv://sujeeshkumar:sujeesh@cluster2.ankzmma.mongodb.net/EmployeeDB?retryWrites=true&w=majority",{ useNewUrlParser: true});

// SIGNUP
app.post('/signup',async(req,res)=>{   
    try{
    let data = new UserModel({ 
        name: req.body.name, 
        Email: req.body.Email, 
        Password: Bcrypt.hashSync(req.body.Password,10)
    });
    
    await data.save();
    res.json({"Status":"Success","Data": data});
}catch(error){
    console.log(error);
}
})


// LOGIN
app.post('/signin',(req,res)=>{
    try {
     var Email = req.body.Email;
     var Password = req.body.Password;

    let result = UserModel.find({Email:Email},(err,data)=>{

        if (data.length>0) {
            
            const Validator=Bcrypt.compareSync(Password,data[0].Password);
            if (Validator) {

                res.json({"Status":"Success","Data":data});
            } else {
                res.json({"Status":"failed","data":"invalid Password"});

            }
        } else {
            res.json({"Status":"failed","data":"invalid email id"});
        }
    })
        
    } catch (error) {
        console.log(error);
    }
})


// GET EMPLOYEE
app.get('/employeelist',(req,res)=>{
    try{
        EmployeeModel.find().then(function(data){
    res.send(data)
})
}catch(error){
    console.log(error);
}
})


//GET BY ID
app.get('/employeelist/:id',(req,res)=>{
    try{
        EmployeeModel.findOne({"_id":req.params.id}).then(function(data){
res.send(data)
})
}catch(error){
    console.log(error);
}
})

// ADD EMPLOYEE

app.post('/add/employeelist',async(req,res)=>{
    try{
        let item=req.body;
        console.log('data from frontend',item)
        const user=new EmployeeModel(item)
        const savedUser=await user.save()
        res.send()
        console.log(savedUser)
    }
    catch(error){
        console.log(error);
    }
})

// UPDATE EMPLOYEE
app.put('/update/employeelist',(req,res)=>{
    let id=req.body._id;
    EmployeeModel.findByIdAndUpdate({"_id":id},{
    $set:{
        "Name":  req.body.Name,
        "Location":req.body.Location,
        "Designation":req.body.Designation,
        "Salary":req.body.Salary
    }
    })
    .then(function(){
    res.send();
    }) 
})


// DELETE EMPLOYEE
app.delete('/delete/employeelist/:id',(req,res)=>{
    let id=req.params.id;
    EmployeeModel.findByIdAndDelete({"_id":id}).then(()=>{
        res.send();
    })
})



// listen

const PORT = process.eventNames.PORT || 3008
app.listen(PORT,()=>{
    console.log(`Server is connected in port ${PORT}`);
})