import React,{useId, useRef} from "react"
import "./App.css";

export default function Id(){
//   const id1 = Math.random()
//   const id2 = Math.random()
     const id1 = useId(); //:<someToken-Index>:
     const id2 = useId();
     const email = useRef();
     const text = useRef();

    //  var emailInput = document.getElementById(':r0:');
    //  emailInput.type='password';

  return (
	<React.Fragment>
		<hr/>
        <center>

       <form autoComplete="off">
            <h1>This is Id Component</h1>
            <label htmlFor={id1}>Email</label>
            <br/>
            <input type="text" id={id1} placeholder="email" ref={text}/>

            <label htmlFor={id2}>UserName</label>
            <input type="email" id={id2} placeholder="Email" ref={email}/>
            <br/>
            <input id="pass" type="password"/>

       </form>
       
        </center>
	</React.Fragment>
  );
  
  
}

