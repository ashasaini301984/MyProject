import {useState} from "react";
import axios from'axios';
import "../style/FindAll.css"
function FindAll(){
            const[employees,setEmployees]=useState([]);
            async function findAllHandler(e){
             e.preventDefault();
try{
            const response=await axios.get('https://backend-90sj.onrender.com/api/employees');
            setEmployees(response.data);
}catch(err)
        {
             alert(err);
        }
    }
return(
           <div>
            <h1>Employee Records</h1>
            <hr/>
            <form onSubmit={findAllHandler}>
            <button type="Submit">Get All Record</button>
            </form> 
<div>
<table>
            <th>ID</th>
            <th>No</th>
            <th>Name</th>
            <th>Sal</th>
            <thead/>
            <tbody>
                        {
                            employees.length > 0 ?(
                                employees.map(emp=>(
                                <tr>
                                    <td>{emp._id}</td>
                                    <td>{emp.empNo}</td>
                                    <td>{emp.empName}</td>
                                    <td>{emp.empSal}</td>
                                </tr>
                            ))
                        ): <tr> <td colSpan={'4'}> No Record</td></tr>
                        }
                    </tbody>
                </table>
            </div>
            </div>


    )
}

export default FindAll;
