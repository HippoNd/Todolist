import React,{useState} from 'react'
import Footer from './Footer';
import Input from './Input'
import List from './List';

function Container() {
    const toDoListLocalStorage = localStorage.getItem('jsonToDoList');
    const [toDoList,setToDoList] = useState(JSON.parse(toDoListLocalStorage))
    const getIdArray = JSON.parse(toDoListLocalStorage).map(item=>item.id);
    const idMax = JSON.parse(toDoListLocalStorage).length ? Math.max(...getIdArray) : 0;
    function onAdd (data) {
        setToDoList([...toDoList,data])
        localStorage.setItem('jsonToDoList',JSON.stringify([...toDoList,data]))
    }
    function onDelete (id) {
        const toDoListDelete = JSON.parse(toDoListLocalStorage).filter(item=>item.id !==id)
        setToDoList(toDoListDelete)
        localStorage.setItem('jsonToDoList',JSON.stringify(toDoListDelete))
    }
    function onEdit (data,id) {
      const toDoListEdit = [...toDoList]
      const index = toDoListEdit.findIndex(item=>item.id===id)
      toDoListEdit.splice(index,1,data)
      setToDoList(toDoListEdit)
      localStorage.setItem('jsonToDoList',JSON.stringify(toDoListEdit))
    }
    function checkBox (e,id) {
      const {checked} = e.target
      const checkTodolist = [...toDoList];
      const index = checkTodolist.findIndex(item=>item.id===id)
      checkTodolist[index].isComplete = checked
      setToDoList(checkTodolist);  
      localStorage.setItem('jsonToDoList',JSON.stringify(checkTodolist))
    }
    function totalCheckBox () {
      const trueTodolist = toDoList.map(function (item) {
        return {...item,isComplete:true}
      })
      const falseTodolist = toDoList.map(function (item) {
        return {...item,isComplete:false}
      })
      const checkTrueFalse = toDoList.find(item=>item.isComplete===false)
      if(checkTrueFalse){
        setToDoList(trueTodolist)
        localStorage.setItem('jsonToDoList',JSON.stringify(trueTodolist))
      }else{
        setToDoList(falseTodolist)
        localStorage.setItem('jsonToDoList',JSON.stringify(falseTodolist))
      }
      
    }
    const notCompleteArray = toDoList.filter(item=>item.isComplete===false)
    const count = notCompleteArray.length;
    
  return (
    <div>
      <h1>todos</h1>
      <Input onAdd={onAdd} idMax={idMax} totalCheckBox={totalCheckBox} />
      <List toDoList={toDoList} onDelete={onDelete} checkBox={checkBox} onEdit={onEdit}/>
      <Footer count={count}/>
    </div>
  )
}

export default Container
