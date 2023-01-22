import React,{Component} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ShowUsers from "./components/ShowUsers";
import Users from "./components/Users";
import {route} from "./Router";
import "./App.css";
import EditUser from "./components/EditUser";
import Footer from "./components/Footer";

export default class App extends Component{
    
    constructor(props){
        super(props);
        this.id=window.localStorage.getItem('hash').split('/')[1];
        this.views = {
            home:<Home/>,
            showUser:<ShowUsers/>,
            createUser:<Users/>,
            ["editUser/"+this.id]:<EditUser user_Id={this.id}/>
    
        }
    }
componentDidMount(){
    console.log(" The Method is Running app.jsx ")
}

    renderViews = () => {
        console.log(route);
        return this.views[route];
    }

    render = () =>{
        return (
            <React.Fragment>
                <Header/>
                {this.renderViews(true)}
                <Footer/>
            </React.Fragment>
        )
    }
}