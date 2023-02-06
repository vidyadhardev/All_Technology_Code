import React,{useContext} from "react";
import { data,age } from "./X";

export default function Z(){

    const name = useContext(data);
    const Age = useContext(age);

  return (
	<React.Fragment>
	
        <h2> This Z Component From  name = {name} ,and Age = {Age}</h2>
        <hr /><hr />
	</React.Fragment>
  );
  
  
}

