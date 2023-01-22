import React,{Component} from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Gallery from "./Components/gallery";
import Home from "./Components/home";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import "./Components/styles/gallery.css";
import "./Components/styles/Header.css";
import "./Components/styles/home.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap"



export default class App extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
            <Header/>
            <hr />
            {this.loadMainContent()}
           <Footer/>
           </div>
             </React.Fragment>
        )
    }


    loadMainContent=()=>{
        let view=""
        switch(window.location.hash){
            case"":
            case "#home":
                return(
                    view = <Home/>
                )

            case "#gallery":

            return(
               view= <Gallery/>
            )

            case "#contact":
                return(
                    view=<Contact/>
                )
                case "#login":
                return(
                    view=<Login/>
                )
               
                default:
                   view = <h1 style={{color:"red"}}>404 Page not found</h1>
        }
        return view;
    }
}
