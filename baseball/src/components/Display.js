import React from 'react';

// display the count of `balls` and `strikes` for the 
// at-bat.

// should be updtated when the user records activity
// on the `Dashboard` component


export default function Display({ ballCount, strike }) {

return (
    <div className="score">
        <div className="balls">Balls: {ballCount}</div>
        <div className="strikes">Strikes: {strike}</div>
    </div>
)
}