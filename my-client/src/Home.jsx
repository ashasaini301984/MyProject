   import{NavLink, Route, Routes} from "react-router-dom";
   import Add from "./components/Add";
   import Find from "./components/Find";
   import FindAll from "./components/FindAll";
   import Update from "./components/Update";
   import Delete from "./components/Delete";
   import "./style/Home.css"


   function Home(){
  
    return(
      <div>
        <h1>Employees Record</h1>
      <hr/>
      <nav>
      <NavLink to={"/"} style={{margin:"0px 20px"}}>Add</NavLink>
      <NavLink to={"/Find"} style={{margin:"0px 20px"}}>Find</NavLink>
      <NavLink to={"/FindAll"} style= {{margin:"0px 20px"}}>FindAll</NavLink>
      <NavLink to={"/Update"} style= {{margin:"0px 20px"}}>Update</NavLink>
      <NavLink to={"/Delete"} style= {{margin:"0px 20px"}}>Delete</NavLink>
      </nav>

      <Routes>

        <Route path ="/" element={<Add/>}/>
        <Route path ="/Find" element={<Find/>}/>
        <Route path="/FindAll" element={<FindAll/>}/>
        <Route path="/Update" element={<Update/>}/>
        <Route path="/Delete" element={<Delete/>}/>

      </Routes>
      
</div>

    )
 }
export default Home;