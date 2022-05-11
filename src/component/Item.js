import React,{useState} from 'react'

function Item(props) {
    const idSelected = props.item.id
    const dataSelected = props.toDoList.find(item=>item.id===idSelected)
    const [isEdit,setIsEdit] = useState(false);
    const [valueInput,setValueInput] = useState(dataSelected.content)
  
    const data = {
      id:dataSelected?.id,
      content:valueInput,
      isComplete:dataSelected?.isComplete
    }
    function getValue (e) {
      const {value} = e.target;
      setValueInput(value)
    }
  
    function update (){
      props.onEdit(data,idSelected)
      setIsEdit(false)
    }
  return (
    <>
      <li onDoubleClick={()=>setIsEdit(true)} >
          <input 
          type={'checkbox'} 
          onChange={(e)=>props.checkBox(e,props.item.id)} 
          checked={props.item.isComplete}
          />
          { isEdit === false ? <label>{props.item.content}</label> : <input onBlur={update} onChange={getValue} onKeyPress={(e)=>{if(e.key==="Enter"){update()}}} value={valueInput} />}
          <button onClick={()=>{props.onDelete(props.item.id)}}>X</button>
     </li>

    </>
  )
}

export default Item
