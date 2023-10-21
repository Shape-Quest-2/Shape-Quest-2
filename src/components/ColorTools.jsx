import React, { useState } from 'react';


function ColorSelector({ setColor }) {

    return (
        <section id="colors">
            <button id="blueButton" onClick={setColor('blue')}></button>
            <button id="redButton" onClick={setColor('red')}></button>
            <button id="yellowButton" onClick={setColor('yellow')}></button>
            <button id="purpleButton" onClick={setColor('purple')}></button>
            <button id="greenButton" onClick={setColor('green')}></button>
            <button id="orangeButton" onClick={setColor('orange')}></button>
        </section>
    )

}

export default ColorSelector;