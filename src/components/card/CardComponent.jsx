import React from 'react';
import './CardComponent.css';

 const CardComponent = (props) =>{
     return(
<div className='Cardcomponent'>
<img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`}/>
<h2>{props.monster.name}</h2>
<p>{props.monster.email}</p>

</div>
     )
}

export default CardComponent;