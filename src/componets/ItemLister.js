import React from 'react'
import './ItemLister.css';

function ItemLister(props){
    const items = props.items;
    
    const listItems = items.map(item =>
        
   {
       return <div className="list" key={item.key}>
           
     <p>
         {item.text} 
        
     </p>
     <form id="deleteButton">
         <button onClick={ () => props.deleteItem(item.key)}>X</button></form>
    </div>})
    return <div>
      
        {listItems}
    </div>;
  }
  

  export default ItemLister;