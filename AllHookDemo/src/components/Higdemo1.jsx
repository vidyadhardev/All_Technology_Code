import {useState,useEffect} from "react";
function Higher1 (){
const [count,setCount]=useState(0);

useEffect(()=>{
setTimeout(()=>{

setCount((count)=> count + 1);

},1000);

});
return <h2>
    This is Induction method
    <p>The Count : {count}</p></h2>

}


export default Higher1