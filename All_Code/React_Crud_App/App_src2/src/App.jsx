import React,{Component} from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import Home from "./components/Home.jsx";
import Login from "./components/Login .jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";

import route  from "./Router.js";

export default class App extends Component{
    view = {
        home:<Home/>,
        login:<Login/>,
        gallery:<Gallery/>,
        contact:<Contact/>,
    }
    render = () =>{
        return(
            <React.Fragment>
                
                 <div className="container-fluid">
                    <Header/>
                  {this.renderViews()}
                 <Footer></Footer>
                 </div>
            </React.Fragment>
        )
    }
    renderViews =()=>{
        return this.view[route];
    }
    
}