import React from 'react';
import C from './C';
import { money } from './A';

function B() {
    return (
        <div>
            <money.Consumer>
                {(name) => {
                    return (<h2>This is B Component : {name}</h2>);
                }}
            </money.Consumer>
            <C />
        </div>
    );
};

export default B;