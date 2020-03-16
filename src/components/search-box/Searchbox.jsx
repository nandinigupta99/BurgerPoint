import React from 'react';
import './searchbox.css';

const Searchbox =({placeholder,handleChange}) => {
return(

    <input className='search' type='search' placeholder={placeholder} 
    onChange={handleChange}/>
)
}

export default Searchbox