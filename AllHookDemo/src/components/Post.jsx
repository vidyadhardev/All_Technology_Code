import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Post = () => {
const[posts,setPosts] = useState('posts');
const[data,setData] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/'+posts).then((result)=>{
        result.json().then((resp)=>{
            setData(resp)
        })
    })
   
},[posts])
    return (
        <div>
        <hr/>
        <h1>Example API using useEffect</h1>
          <button onClick={()=>{setPosts('news')}}>Latest News</button> 
          <button onClick={()=>{setPosts('posts')}}>Latest Posts</button> 
          <p>Results</p>

          {
            data.map((item)=>{
                return(
                    <ul>
                        <li>{item.id}</li>
                        <li>{item.title}</li>
                        <li>{item.description}</li>
                        <li>{item.created_by}</li>
                        <li>{item.created_at}</li>
                    </ul>
                )
            })
          }
          
        </div>
    );
};
export default Post;