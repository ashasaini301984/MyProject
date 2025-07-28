import axios from "axios";
import { useState } from "react"
import '../style/Delete.css'
function Delete(){
    const[id,setId]=useState("");
    
    async function deleteData(e)
    {
        e.preventDefault();
        try
        {
const response = await axios.delete(`https://backend-90sj.onrender.com/api/employees/${id}`);
alert(response.data.message);
        }
        catch(err)
        {
            alert("Record Not FOund : " + err);

        }
    };
    return(
        <div className="container-delete">
            <h1>Delete Record By ID</h1>
            <hr/>
            <form onSubmit={deleteData}>
            <input type="text" placeholder="Enter Id" value={id} onChange={e => setId(e.target.value)} required/>
            <br/><br/>
            <button type="submit">Remove Data</button>
 </form>
    </div>
)
}
export default Delete;


