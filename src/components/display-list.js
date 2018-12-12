import React from 'react';
import ListItem from './list-item';

export default function DisplayList(props) {

  const display = props.todos.map((todos,index) => { 
  
    return (<ListItem todos={todos} key={index} arrayIndex = {index}
      onEditClick={props.onEditClick} onEditChange = {props.onEditChange} onDeleteClick={props.onDeleteClick}/>)
  
  })
   
  
  return (
  
    <ol>{ display }</ol>
  
  )

   

}


