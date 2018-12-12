import React from 'react';
import List from './list';

export default function DisplayList(props) {

  const display = todos.map((todos) => { 
  
    return (<List todo={todos} key={todos.id} remove={remove} />)
  
  })
   
  
  return (
  
    <ol>{ display }</ol>
  
  )

   

}


