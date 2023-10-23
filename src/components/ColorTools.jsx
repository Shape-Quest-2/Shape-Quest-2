import React, { useState } from 'react';


function ColorSelector({ setSelectedColor }) {
    return (
        <section id="colors" >
            <button className='colorbuttons' id="blueButton" onClick={() => setSelectedColor('blue')}></button>
            <button className='colorbuttons' id="redButton" onClick={() => setSelectedColor('red')}></button>
            <button className='colorbuttons' id="yellowButton" onClick={() => setSelectedColor('yellow')}></button>
            <button className='colorbuttons' id="purpleButton" onClick={() => setSelectedColor('purple')}></button>
            <button className='colorbuttons' id="greenButton" onClick={() => setSelectedColor('green')}></button>
            <button className='colorbuttons' id="orangeButton" onClick={() => setSelectedColor('orange')}></button>
        </section>
    )
}

export default ColorSelector;