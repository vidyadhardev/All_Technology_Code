import React,{Component} from "react";
import "./styles/Header.css";

export default class Header extends Component{
    render = () =>{
        return(
            <React.Fragment>
                <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2">
      <li className="nav-item">
          <a className="nav-link active" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">Gallery</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
                </div>
            </React.Fragment>
        )
    }
}