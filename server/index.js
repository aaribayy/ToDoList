const express = require('express')
const mongoose = require('mongoose')
const TaskModel = require('./model/Tasks')

// const userRoute = require("./route/blogRoute")
const cors = require('cors')
// const port = 4000;


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/TaskManagementSystem").then((res)=>{
    console.log(`Server Connected `);
}).catch((err) => {
    console.log(`Server not connected${err}`);
  });

app.post("/createTask",(req,res) =>{
    TaskModel.create(req.body).then(tasks => res.json(tasks))
    .catch(err => res.json(err));
})

app.get("/",(req,res) =>{
    TaskModel.find({}).then(tasks => res.json(tasks))
    .catch(err => res.json(err));
})

app.get('/getTask/:id', (req,res) => {
    const id = req.params.id;
    TaskModel.findById({_id:id}).then(tasks => res.json(tasks))
    .catch(err => res.json(err));
})
// app.use(express.json());
// app.use("/api/Users",userRoute);

app.put('/updateTask/:id',(req,res)=>{
    const id = req.params.id;
    TaskModel.findByIdAndUpdate({_id:id},{
        title:req.body.title, description:req.body.description, status:req.body.status , deadline:req.body.deadline})
    .then(tasks=> res.json(tasks))
    .catch(err => res.json(err));
})

app.delete('/deleteTask/:id',(req,res) =>{
    const id = req.params.id;
    TaskModel.findByIdAndDelete({_id:id})
    .then(res=> res.json(res))
    .catch(err => res.json(err));

})
app.listen(3001,()=>{
    console.log(`server is running on port 3001`)
})
module.export = app;