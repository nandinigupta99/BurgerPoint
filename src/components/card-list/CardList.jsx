import React from 'react';
import  './Cardlist.css';
import CardComponent from '../card/CardComponent';

export const CardList = (props) => {
 return(  
    <div className='Cardlist'>

 {
    props.monsters.map(monster =>

<CardComponent key={monster.id} monster={monster}/>
    )
  }
    </div>
    
    
    )
}