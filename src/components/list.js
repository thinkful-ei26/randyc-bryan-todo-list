import React from 'react';

export default function List(props) {
 return ( 
 <ol>
    {
      props.todo.map((item, index) => <li key={index}>{item}</li>)
    }
  </ol>
 )
}

