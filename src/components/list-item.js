import React from 'react';

export default function ListItem(props) {


 return ( 
   
      <li>
      <form>
        
      <input value = { props.todos } onChange = {(e) => props.onEditChange(props.arrayIndex,e.target.value)}/>
      <a> ...click on text to edit or  </a><button onClick = {() => props.onDeleteClick(props.arrayIndex) }>DELETE</button>  
      </form>
       
      
      </li> 
  
 )
}

