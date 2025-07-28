require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app = express();
app.use(express.json());
app.use(cors());
async function connectDB (){
    try{
        //await mongoose.connect('mongodb://localhost:27017/company');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongodb connected');
    }catch (error){
        console.error('Mongodb connectoin failed:',error);
        process.exit(1);
    }
}
connectDB();
const employeeSchema=new mongoose.Schema(
    {
        empNo:{type:Number,required:true},
        empName:{type:String,required:true,unique:true},
        empSal:{type:Number,required:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
);
const Employee=mongoose.model('Employee',employeeSchema); 
//save in the postman
app.post('/api/employees', async (req,res)=>{
    try{
        const employee=new Employee(req.body);
        const savedEmployee=await employee.save();
        res.status(201).json({message:"employee added successfully..."});
    }
    catch(error)
    {
        res.status(400).json({message:error.mesage});
    }
});
//all find
app.get('/api/employees', async (req,res)=>{
    try{
        const employee=await Employee.find();
        res.json(employee);
    }
    catch(error)
    {
        res.status(500).json({message:error.mesage});
    }
});
//only one id find
app.get('/api/employees/:id', async (req,res)=>{
    try{
        const employee=await Employee.findById(req.params.id);
        if(!employee)
            return res.status(404).json({message:'employee not found'});
        res.json(employee);
    }
    catch(error){
        res.status(500).json({message:error.mesage});

    }
});
//delete operation
app.delete('/api/employees/:id', async (req,res)=>{
    try{
        const deletedemployee=await Employee.findByIdAndDelete(req.params.id);
if(!deletedemployee)
    return res.status(404).json({message:'employee not found'});
    res.json({message:'employee deleted successfully'});
    }
    catch(error){
        res.status(500).json({message:error.mesage});

    }
});
//update
app.put('/api/employees/:id', async (req,res)=>{
    try{
        const updatedemployee=await Employee.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new:true,
                runValidators:true
            });
            if(!updatedemployee)
                return res.status(404).json({message:'employee not found'});
            //res.json(updatedemployee);
            res.json({message:'employee Updated successfully'});
}
catch (error){
   res.status(400).json({message:error.mesage}); 
}
});
 app.listen(3001,()=>{
    console.log(`server is running on http://localhost:3001`);
})

