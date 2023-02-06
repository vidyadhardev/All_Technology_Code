import React, { createContext } from "react";
import Y from "./Y";
// Used CreateContext Hooks & this is A Example
const data = createContext(); //step-1
const age = createContext();

export default function X() {
  const name = "Vidya Dhar maurya";
  const ageValue = 21;
  return (
    <React.Fragment>
      <hr /><hr />
      <data.Provider value={name}>
        <age.Provider value={ageValue}>
          <h1>Use of useContext Hook (For Data Provider/Creater)</h1>
          <h2> This is ( X ) Component =  {name}</h2>
          <Y />
        </age.Provider>
      </data.Provider>


    </React.Fragment>
  );


}

export { data, age };

