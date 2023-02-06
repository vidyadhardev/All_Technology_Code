import React, { useEffect, useState } from 'react';

const GetData = () => {
    const[data,setData] = useState([])
    

      
    

    useEffect(()=>{
        fetch('http://localhost:5000/users').then((result)=>{
            return result.json().then((resp)=>{
            setData(resp)
        }).catch()
    })
    },[])

    return (
       <>
        {
            data.map((item,index)=>{
                return(
                    <>
                        <ul key={index}>
                            <li>{item.name}</li>
                            <li>{item.email}</li>
                            <li>{item.mobile}</li>
                        </ul>
                    </>
                )
            })
        }
       </>
          
       
    );
};

export default GetData;