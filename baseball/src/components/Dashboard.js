import React from 'react';

// - provide a button that the person in charge 
// can press every time there is a `strike`, `ball,
// `foul` or `hit`

// - changes recorded in this component should update
// the information shown by the `Display` component.


export default function Dashboard({ ballCount, setBallCount, strike, setStrike }) {
    
    const addStrike = () => {
        if(strike === 3) {
            setStrike(0)
            setBallCount(0);
        } else {
            setStrike(strike + 1);
        }
    }

    const addBall = () => {
        if(ballCount === 4) {
            setStrike(0)
            setBallCount(0);
        } else {
            setBallCount(ballCount + 1);
        }
    }

    const addHit = () => {
        setStrike(0);
        setBallCount(0);
    }

    const addFoul = () => {
        if(strike === 0){
            setStrike(strike + 1)
        } else if (strike === 1) {
            setStrike(strike + 2)
        } else if (strike === 2) {
            setStrike(strike)
        }
    }

    return(
        <div className="button-panel">
            <button onClick={() => addStrike()}>Strike</button>
            <button onClick={() => addBall()}>Ball</button>
            <button onClick={() => addFoul()}>Foul</button>
            <button onClick={() => addHit()}>Hit</button>
        </div>
    )

}