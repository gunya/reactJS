import React from 'react';
import classesPer from './Person.css';

const person = (props) => {
    return (
        <div className={classesPer.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text"  onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;