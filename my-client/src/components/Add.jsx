import {useState} from "react";
import axios from'axios';
import "../style/Add.css"
function Add(){

const[empNo, setEmpNo]=useState('');
const[empName,setEmpName]=useState('');
const[empSal ,setEmpSal]=useState('');

async function show(e)
{
    e.preventDefault();
    try{
        const response=await axios.post('http://localhost:3001/api/employees',
            {empNo,empName,empSal});
            alert(response.data.message);
    }catch(error)
        {
            alert("Hello:"+error);
        }
    }
    
           return(
           <div>
            
            <div id="inputs">
                <h1>Login Portal</h1>
            <input type="text" placeholder="Enter your No" value={empNo} onChange={(e)=>{setEmpNo(e.target.value)}}></input><br></br>
            <input type="text" placeholder="Enter your Name" value={empName} onChange={(e)=>{setEmpName(e.target.value)}}></input><br></br>
            <input type="text" placeholder="Enter your Salary" value={empSal} onChange={(e)=>{setEmpSal(e.target.value)}}></input><br></br>
            <button type="submit"className="button "onClick={show}>Submit</button>
            </div>
            </div>
    );
}

export default Add;