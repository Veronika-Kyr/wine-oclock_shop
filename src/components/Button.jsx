import React from 'react';
//import "../assets/styles/Button.scss"



export default function Button(props) {
    return (
        <>
            <button className='typicalBtn'>

                <p className='buttonName'>  {props.text}</p>
            </button>
        </>
    )
}