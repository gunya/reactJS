import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-wth:500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person">
            <p onClick={props.click} style={style}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text"  onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);