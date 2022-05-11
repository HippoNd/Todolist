import React from 'react'
import './Component.css'
import Item from './Item'
function List(props) {
    const toDoList = props.toDoList.map(function(item,index){
        return <Item key={index} item={item} checkBox={props.checkBox} onDelete={props.onDelete} onEdit={props.onEdit} toDoList={props.toDoList}/>
    })
  return (
    <div className='list'>
      <ul>
          {toDoList}
      </ul>
    </div>
  )
}

export default List
