import React, { useState } from 'react';


function ColorSelector({ setColor }) {

    return (
        <section id="colors" >
            <button class='colorbuttons' id="blueButton" onClick={setColor('blue')}></button>
            <button class='colorbuttons' id="redButton" onClick={setColor('red')}></button>
            <button class='colorbuttons' id="yellowButton" onClick={setColor('yellow')}></button>
            <button class='colorbuttons' id="purpleButton" onClick={setColor('purple')}></button>
            <button class='colorbuttons' id="greenButton" onClick={setColor('green')}></button>
            <button class='colorbuttons' id="orangeButton" onClick={setColor('orange')}></button>
        </section>
    )

}

export default ColorSelector;