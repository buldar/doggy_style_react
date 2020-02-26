import React from 'react';
import './App.css';

const Onecircle =(props) => {
        return (
            <div className='item'>
                <img onClick={props.onClick}
                     src = {props.img}
                     className={props.className}/>
            </div>
        );
}

export default Onecircle;
