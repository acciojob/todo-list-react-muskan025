/* eslint-disable react/prop-types */
import { useState } from 'react'

export const Tasks = ({task,tasks,setTasks}) => {
 const [edit,setEdit]=useState(false)
const [editedTask,setEditedTask]=useState(task)

function editTask(){
    setEdit(true)
}

function saveTask(){
    setEdit(false)
   let updatedTask=tasks.map((currtask)=>
currtask === task?editedTask : currtask
   )
   setTasks(updatedTask)
}

function handleEditChange(e){
    setEditedTask(e.target.value)
}

function deleteTask(task){
const newTaskArray=tasks.filter((currtask)=>{
   if(task!= currtask){
return currtask
    } 
})
setTasks(newTaskArray)
}

  return (
<>
{ edit ?  <div className='tasks_section' >
    <input type="text" name='task' className="task" value={editedTask}  onChange={handleEditChange} />
    <button className="edit" onClick={saveTask}>Save</button>
</div>:
<div className='tasks_section'>
    <p className="task">{task}</p>
 <button className="edit" onClick={editTask}>Edit</button>
 <button className="delete" onClick={()=>deleteTask(task)}>Delete</button>
</div>
 }
</>
  )
}
