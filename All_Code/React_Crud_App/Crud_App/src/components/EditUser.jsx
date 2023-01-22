import React,{Component} from "react";
import { route,redirect } from "../Router";


export default class EditUser extends Component{
    constructor(props){
        super(props);
        this.state = {
              name:"",
              email:"",
              mobile:"",
              password:"",
              users:[],
              msg:"",
          }
     }
  
      render = () =>{
          return (
              <div style={{border:"2px solid black",borderRadius:"8px",textAlign:"center",width:"500px",marginLeft:"450px",marginTop:"10px"}}>
                <h1 style={{color:"red",textAlign:"center"}}>User Data Is Update(Edit)</h1>
                <hr/>
                {this.UpdateData.msg}
                <form>
                      <p>Name : <input type="text" 
                      value={this.state.name} 
                      onChange= { (event)=> 
                      {this.setState({name:event.target.value})}  
                      }/>
                      </p>
                      <p>Email : <input type="email" value={this.state.email} 
                      onChange= {(event)=>{this.setState({email:event.target.value})}}/></p>
                      <p>Mobile : <input type="mobile" value={this.state.mobile} 
                      onChange= {(event)=>{this.setState({mobile:event.target.value})}}/></p>
                      <p>Password : <input type="password" value={this.state.password} 
                      onChange= {(event)=>{this.setState({password:event.target.value})}}/></p>
                      <input type="button" value="Update" 
                      //onClick={()=>{validation();this.UpdateData(this.props.user_Id)}} this method is used to multiple data send for edit
                      onClick={this.UpdateData}
                      /> 
                </form>
              </div>
          )
      }
      componentDidMount(){
          // data coming from fetch Api
       let id = this.props.user_Id;
       //const url='https://json-server.seeksolution.in/users/';
       const url='http://localhost:10000/users/';
       let promise=fetch(url+id).then((response)=>{
        if(response.ok){
        return response.json();
        }
       }).then((data)=>{
        this.setState({
            name:data.name,
            email:data.email,
            mobile:data.mobile,
            password:data.password,
        });
       }).catch((error)=>{
        console.log(error);
       });
      }
      UpdateData = () =>{
        let id = this.props.user_Id;
        let UpdateUser = {
        name:this.state.name,
        email:this.state.email,
        mobile:this.state.mobile,
        password:this.state.password,
      }
      const url="http://localhost:10000/users/"+id;
     let promise=fetch(url,{
       headers:{
           "Content-Type":"application/json",
       },
       method:"PUT",
       body:JSON.stringify(UpdateUser)
     }).then((response)=>{
       if(response.ok){
           return redirect('showUser');
       }

     }).then((data)=>{

     }).catch((error)=>{

     });

      }
}