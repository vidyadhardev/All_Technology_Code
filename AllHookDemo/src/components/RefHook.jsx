import React,{useEffect, useRef, useState} from "react";

export default function Ref(){

    const [name,setName] = useState('');
    const [Textname,setTextName] = useState('');

    const [counter,setCounter] = useState(0);
    const countRender = useRef(0);
        
    useEffect(()=>{
        console.log('counter will increment');
        setCounter(prevCounter => prevCounter+1);

        countRender.current = countRender.current+1;
        console.log(countRender);

    },[name,Textname]);

    return (
          
	    <React.Fragment>
		    <hr/>
		    <h1> Example of useRef Hook</h1>
            <input name="text" onChange={(event)=>{setName(event.target.value)}} />
            <br/>
            The name while typing :  {name} 
            <br/>
            <button onClick={handleName}>Set Text Name</button>
            <br/>
            The name after clicking :  {Textname} 
            counting { counter} 

	    </React.Fragment>
  );

  function handleName(){
    console.log('rendering from click');
    setTextName(document.querySelector('input').value);
  }

}




