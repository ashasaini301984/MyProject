import axios from "axios";
import {useState} from"react";
import "../style/Find.css";
 function Find(){
    const[id,setid]=useState("");
    const[employee,setEmployee]=useState(null);
    async function getData(e){
        e.preventDefault();
        try{
            const response=await axios.get(`https://backend-90sj.onrender.com/api/employees/${id}`);
            setEmployee(response.data);
        }catch(err){
            setEmployee(null);
            alert("Employee not found:"+err);
        }
    };
    return(
        <div className="container-find">
            <h1>Find Record By Id</h1>
            <input type="text" placeholder="Enter id "value={id} onChange={e=>
                setid(e.target.value)}required/><br></br>
                <button onClick={getData}>Find Data</button><br></br>
                {employee && (
                    <div>
                        <h3>Employee Details</h3>
                        <hr/>
                        <p>Emp No is:{employee.empNo}</p>
                        <p>Emp Name is:{employee.empName}</p>
                        <p>Emp Sal is:{employee.empsal}</p>
                        </div>
                )}
            
        </div>
    )

}
export default Find;
