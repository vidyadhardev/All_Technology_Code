import React,{useState} from "react";

export default function Blog(){

    const [name,setName] = useState('Mr.');
    const [i,setI]= useState(0);
    const [user,setUser]= useState({name:"Vidya dhar",class:"B.tech",roll:"0012"});

  return (
	<React.Fragment>
		<hr/>
		<h1> Example of useState using inline Arrow Operator</h1>
        The Name = {name} <br/>
        <button onClick={()=>{handleName('Abhay maurya')}}>setName</button>

        The counter = {i} <br/>
        <button onClick={handleCounter}>+</button>

        The user Data = {JSON.stringify(user)} <br/>
        <button onClick={()=>{updateUser({"hobbies":"making momos","city":"wuhang"})}}>Update User Data</button>
	      
		  
	</React.Fragment>
  );

//   function updateUser(updatedData){
//         console.log(user);
//         console.log(updatedData);
//      let newUser = {
//         ...user,
//         ...updatedData
//      }
//         //console.log(newUser);
//         setUser(newUser);
//   }

function updateUser(updatedData){
    setUser((prevUser)=>{        
        return {...prevUser,...updatedData};
    });
}



function handleCounter(){
    setI(prevI => prevI+1);
}


//   function handleName(x){  
//       setName((prevName)=>{
//         return prevName+x;
//       });
//   }

function handleName(x){     
    setName(prevName => prevName + x);
}

 
}