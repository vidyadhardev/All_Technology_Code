import React from 'react';
import { money, food } from './A';

function C() {
    return (

        <div>
            <money.Consumer>
                {
                    (name) => {
                        return (
                            <div>

                                <food.Consumer>
                                    {
                                        (item) => {
                                            return (<h2>Food Item = {item}</h2>)
                                        }
                                    }
                                </food.Consumer>
                                <h1>This is C Component : {name}</h1>
                            </div>
                        )
                    }
                }
            </money.Consumer>
        </div>
    );
};

export default C;