import React,{Component} from "react";

export default class Header extends Component{
    render = () =>{
        return (
            <div>
                <a href="#home">Home</a> |
                <a href="#createUser">Create User</a> |
                <a href="#showUser">Show User</a>
            </div>
        )
    }
}