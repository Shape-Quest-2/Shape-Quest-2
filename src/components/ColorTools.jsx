import React, { useState } from 'react';


function ColorSelector({ setColor }) {
    return (
        <section id="colors" >
            <button className='colorbuttons' id="blueButton" onClick={() => setColor('blue')}></button>
            <button className='colorbuttons' id="redButton" onClick={() => setColor('red')}></button>
            <button className='colorbuttons' id="yellowButton" onClick={() => setColor('yellow')}></button>
            <button className='colorbuttons' id="purpleButton" onClick={() => setColor('purple')}></button>
            <button className='colorbuttons' id="greenButton" onClick={() => setColor('green')}></button>
            <button className='colorbuttons' id="orangeButton" onClick={() => setColor('orange')}></button>
        </section>
    )
}

export default ColorSelector;