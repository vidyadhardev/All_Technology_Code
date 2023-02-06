import React,{useContext} from "react";
import { data } from "./X";
import Z from "./Z";


export default function Y(){
   const x= useContext(data);
  return (
	<React.Fragment>

        <h2> This Y  Component = {x + `  =>The  Data is Imported X Component useContext Hook`}</h2>
        <Z/>
	</React.Fragment>
  );
  
  
}

