import { useState,useEffect } from "react";
function Higher (){

const[count,setCount]=useState(1);
const[calculation,setCalculation]=useState(1);


useEffect(()=>{

//Synthesis or Induction method function
    setCalculation(()=> count *2);

},[count]);//add the count variable here

return (
<>
<h2>SYNTHESIS OR INDUCTION METHOD FUNCTION</h2>
<p>Count:{count}</p>
  <button
   onClick={()=>setCount((c)=>c +1)}>CLICK TO CALL FUNCTION</button>  {/*Synthesis or Induction method function */}
<p>calculation:{calculation}</p>
</>

)
} export default Higher