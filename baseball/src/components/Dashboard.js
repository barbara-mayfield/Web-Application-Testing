import React from 'react';

// - provide a button that the person in charge 
// can press every time there is a `strike`, `ball,
// `foul` or `hit`

// - changes recorded in this component should update
// the information shown by the `Display` component.


export default function Dashboard(props) {


    
    return(
        <div className="button-panel">
            <button>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
        </div>
    )

}