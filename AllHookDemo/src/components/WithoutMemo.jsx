import React,{useState,useEffect} from "react";


export default function WithoutMemo(){
 
const [counter,setCounter] = useState(0);
const [dark,setDark] = useState(true);
const double = doDouble(counter);

useEffect(()=>{
    console.log("theme loaded from without Memo");

    return (
        console.log("Data Unmounted")
    );
    
},[dark]);


var theme = {
    backgroundColor: dark ? "white" : "black",
    color: dark ? "black" : "white"
}

return (
	<React.Fragment>
		<hr/>
		<h1> Example of Without Memo using Function Based Component</h1>
	      
		  <p> This is Counter Button 
            <input type="number" value={counter} 
            onChange={
                (event) =>{
                setCounter(event.target.value)
                }
            }/> <br/>
            The counter value = <span style={theme}>{double}</span>
            <button onClick={()=>{setDark(prevDark => !prevDark)}}>Change</button>
		  </p>
		
	</React.Fragment>
  );
  
function doDouble(counter){
     console.log('processing... from function');  
    for(let i=0;i<100000000;i++){
    }
    return 2*counter;
}
  
  
}

