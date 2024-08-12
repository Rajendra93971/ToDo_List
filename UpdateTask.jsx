import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import {useDispatch} from "react-redux"
import { updateTask } from '../feature/todoSlice';
function UpdateTask(){
  let location=useLocation();
  const {task}=location.state;
  const [data,setData]=useState({name:task.name ,postContent:task.postContent,start:task.start,end:task.end});
  const navigate=useNavigate();
  const handleClick=()=>{
      navigate(-1)
  }
  const dispatch=useDispatch();
  const handleUpdate=(e)=>{
      e.preventDefault();
      const allData={...data}
      dispatch(updateTask({previous:task.name,new:data}));
      navigate(-1);
  }
  const handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
  }
  
return (
  <div className='page1' >
    <form onSubmit={handleUpdate}>
    <div className='content' >
          <div className='nav-bar'>
          <h5 onClick={handleClick} className='pointer'> &gt; </h5>
          <h5>Create New Task</h5>
          <h1></h1>
          </div>
          <div className='task-content'>
          <h3>Task Name</h3>
          <input type='text' placeholder='Enter task name' name="name" value={data.name} onChange={handleChange}/>
          </div>
          <div className='task-content' >
             <div className='task-content-page'> <h5>Start Time</h5>
             <h5 style={{textAlign:"left"}}>End Time</h5></div>
             <div className='task-content-page'>
              <input type='date' className='date' name="start"  value={data.start} onChange={handleChange} required/>
              <input type='date' className='date' name="end" value={data.end} onChange={handleChange} required/>
             </div>
              </div>
             <div>
             </div>
            <div className="task-content">
              <h5>Description</h5>
            <textarea name="postContent" rows={6} value={data.postContent} onChange={handleChange}  />
            </div>
            <button onClick={handleUpdate} id='button' type='submit'>Update Task</button>
          </div>
          
    </form>
          </div>
)
}

export default UpdateTask
