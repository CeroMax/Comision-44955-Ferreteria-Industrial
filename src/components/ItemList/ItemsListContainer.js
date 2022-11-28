import React from 'react';
import "./ItemsListContainer.css";


export default function ItemsListContainer(props) {
  return (
    <div>
      <h1 className='title'>{props.title}</h1>
    </div>
  )
}
