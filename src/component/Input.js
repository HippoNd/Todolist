import { DownOutlined } from '@ant-design/icons'
import React,{useState} from 'react'
import './Component.css'
function Input(props) {
    const [inputValue,setInputValue] = useState('')
    const data = {
        id:props.idMax+1,
        content:inputValue,
        isComplete:false 
    }
    function getValue (e) {
        const {value} = e.target
        setInputValue(value)
    }
    function addNew (e) {
        if(e.key==='Enter'){
            props.onAdd(data)
            setInputValue('')
        }
        
    }
  return (
    <div>
      <DownOutlined className='Icon' onClick={props.totalCheckBox}/>
      <input className='input' placeholder='What need to be done ?' onChange={getValue} onKeyPress={addNew} value={inputValue}/>
    </div>
  )
}

export default Input
