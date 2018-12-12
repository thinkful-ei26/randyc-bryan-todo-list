import React from 'react';

export default function ListItem(props) {

  // removeItem = (e) => {

  //   this.todos.id;

  // }

 return ( 
 
     
      // <li onClick = {() => (removeItem(todos.id))} key = {todos.id}> </li>
   
      <li><form><input value = { props.todos } onChange ={ props.onChange(this.onChange)} /></form>  <button onClick ={() => props.onEditClick()}>EDIT</button>
      <button onClick = {() => props.onDeleteClick(props.arrayIndex) }>DELETE</button></li> 
  
 )
}

