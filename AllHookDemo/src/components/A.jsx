import React, { createContext } from 'react';
import B from './B';
// Used CreateContext Hooks & this is Example
const money = createContext();
const food = createContext();

function A() {
    const ComponentName="This is Use CreateContext from A.jsx component"
    const name = "Vidya Dhar Maurya";
    const item = "Bred & Sugar";
    return (
        <div>
            <hr /><hr />
            <h1>A is  Component : {ComponentName}</h1>
            <money.Provider value={name}>
                <food.Provider value={item}>
                    <B />
                </food.Provider>
            </money.Provider>
        </div>
    );
};

export default A;
export { money, food };
