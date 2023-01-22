import React,{Component} from "react";
export default class Header extends Component{

    render(){
        return(
            <div>
               
               <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" style={{class:"a"}}>
  <b>  <a style={head} href="javascript:route('#home')">Home</a></b>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <b> <a  className="hd"  href="javascript:route('#contact')">Contact</a></b>
        </li>
        <li class="nav-item">
        <b> <a  className="hd"  href="javascript:route('#gallery')">Gallery</a></b>
        </li>
        <li class="nav-item">
        <b>  <a className="hd"  href="javascript:route('#login')">Login</a></b>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            
            </div>
       
        );
    }
   
}
const head={
    textDecoration:"none",
    marginLeft:"150px",
    fontSize:"22px",
   
}