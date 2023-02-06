import React,{useState,useMemo,useEffect} from "react";

export default function UseMemo(){
   
const [counter,setCounter] = useState(0);
const [dark,setDark] = useState(true);

const double = useMemo(()=>{

    console.log('processing... from memory');
   // console.time();
    for(let i=0;i<100000000;i++){
     
    }

   // console.timeEnd();
    return 2*counter;
    
},[counter]);


var theme = {
    backgroundColor: dark ? "white" : "black",
    color: dark ? "black" : "white"
}

useEffect(()=>{
    console.log("theme loaded with memo");

    return (
        console.log('unmounting state')
    );
    
},[dark]);




  return (
	<React.Fragment>
		<hr/>
		<h1> Example of withMemo using Function Based Component</h1>
	      
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
  
  
}



// import React ,{useState,useMemo} from 'react';

// const Memo=()=>{
//     const [count,setCount]=useState(0)
    
//     const double=useMemo(()=>{
//         for(let i=0;i<1000000;i++){
//             return 2*count;
//         }
//     })
    
//     return(
//         <>
//         <h1>Using Memo hooks</h1>
//         <p>
//             this is use Memo Counter botton
//             <input type="number"value={count}onChange={(event)=>
//                 setCount(event.target.value)}/><br/>

        
//         </p>
//         </>
//     )
// }
// export default Memo;


