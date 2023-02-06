import React,{useState,useEffect} from "react";

export default function Software(){ 

    const [postType,setPostType] = useState(()=>{
    console.log('mounting state...from useState');
    return 'posts';
});

const [records,setRecords] = useState([]);

useEffect(()=>{

let promise = fetch('http://localhost:5000/'+postType);
promise.
    then((response)=>{
        if(response.ok){
            return response.json();
        }
        
    }).
    then((data)=>{
        // console.log(data);
        setRecords(data);
    }).
    catch((err)=>{
    console.log(err);
})

},[postType]);


// useEffect(()=>{
//     console.log('mouting state...from useEffect');
// },[]);


// useEffect(()=>{
//     console.log('mouting state...from useEffect-2 with Update',postType);
// },[postType]);


// useEffect(()=>{

//     console.log('mouting state...from useEffect-3rd with Update',postType);
//     return (
//         console.log(postType,'will be unmounted/cleared')
//     );

// },[postType]);






  return (
	<React.Fragment>
		<hr/>
		<h1> Example Api using useEffect</h1>

        <button onClick={()=>{setPostType('Software')}}>Latest Softwares</button>	
        <button onClick={()=>{setPostType('Posts')}}>Latest Posts</button>	 
   <p>This is Result : <h3> {postType}</h3></p>
        <hr/>
        {/* {JSON.stringify(records)} */}
        {records.map((items,index)=>{
            return (
                <div>
                <ul key={index}>
                    <li>{items.id}</li>
                    <li>{items.title}</li>
                    <li>{items.description}</li>
                    <li>{items.created_by}</li>
                    <li>{items.created_at}</li>
                </ul>
                <hr/>
                </div>
            )
        })}

	</React.Fragment>
  );

}