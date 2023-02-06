import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Emp from "./components/Epm";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Create from "./components/EmpCreate.";
import Details from "./components/EmpDetails";
import Edit from "./components/EditEmp";


function App() {
 
  return(
    <div >
     <BrowserRouter>
   
     <Routes>
    
      <Route path="/" element={<Emp/>}/>
     <Route path="/create" element={<Create/>}/>
     <Route path="/Details/:empid" element={<Details/>}/>
     <Route path="/edit/:empid" element={<Edit/>}/>
     </Routes>
     </BrowserRouter>
    
    </div>
  )
}
export default App;
