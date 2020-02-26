import React from 'react';
import './App.css';

const Counter =(props) => {
    return (
<div className='counter'>
    <h1> {props.val} </h1>
</div>
    );
}

export default Counter;
