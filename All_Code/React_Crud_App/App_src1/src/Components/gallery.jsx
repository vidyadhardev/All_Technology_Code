import React,{Component} from "react";

export default class Gallery extends Component{
    render(){
        return(
      <div>
        <h1 style={{color:"red",border:"2px solid yellow",borderRadius:"7px", textAlign:"center",background:"gray"}}> Gallery</h1>
    
        <div style={{background:"yellow",border:"3px solid black",borderRadius:"5px"}}>
          
        <img src="images/hack1.jpg" alt="pic" height="300px" width="322px" />
        <img src="images/hack2.jpg" alt="pic" height="300px" width="324px" />
        <img src="images/hack3.jpg" alt="pic" height="300px" width="324px" />
         <img src="images/hack4.jpg" alt="pic" height="300px" width="320px" />
      
        </div>
        <center><h2>Sining image</h2></center>
        <div style={{background:"yellow",border:"3px solid black",borderRadius:"5px"}}>
        <img src="images/image1.jfif" alt="pic" height="300px" width="324px" />
        <img src="images/image2.jfif" alt="pic" height="300px" width="324px" />
        <img src="images/image3.jfif" alt="pic" height="300px" width="322px" />
        <img src="images/image5.jfif" alt="pic" height="300px" width="320px" />
       
        </div>
      </div>
     
        );
    }
}