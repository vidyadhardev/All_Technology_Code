import React,{Component} from "react";
import "./styles/Login.css";

export default class Login extends Component{
    render = () =>{
        return(
            <React.Fragment>
                 <div>
            <div class="row g-3  bgStyle">
  <div class="col-4 w-50 me-5 pdd">
  <label for="inputFirstName" class="form-label">F.Name</label>
    <input type="text" class="form-control bg-dark" placeholder="Enter First Name" aria-label="First name"/>
    <label for="inputLastName" class="form-label">L.Name</label>
    <input type="text" class="form-control bg-dark" placeholder="Enter Last Name" aria-label="Last name"/>
<div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control bg-dark" placeholder="Email" id="inputEmail4"/>
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control bg-dark" placeholder="Password" id="inputPassword4"/>
  </div>
  </div>
 <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text"class="form-control bg-dark" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text"class="form-control bg-dark"  id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control bg-dark" placeholder="City" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select style={{color:"black"}} id="inputState"class="form-control bg-dark" placeholder="State">
     <option selected > Uttar Pradesh</option>
     <option > Madhay Pradesh</option>
     <option > Aruranchal Pradesh</option>
    </select>
  </div>
   <div class="col-12">
    <button type="submit" style={{marginLeft:"250px",marginBottom:"20px"}} class="btn btn-primary">Sign in</button>
  </div>
  </div>
</div>
            </React.Fragment>
        )
    }
}