import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import {useDispatch} from "react-redux"
import { createTask } from '../feature/todoSlice';
function Add() {
    const [data,setData]=useState({name:"",postContent:""});
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleClick=()=>{
        navigate(-1)
    }
    const handleCreate=(e)=>{
        e.preventDefault();
        const allDate=document.querySelectorAll(".date");
        const allData={start:allDate[0].value,end:allDate[1].value,...data}
        dispatch(createTask(allData));
        navigate(-1);
        
    }
    const handleChange=(event)=>{
       

        setData({...data,[event.target.name]:event.target.value})
    }
    
  return (
    <div className='page1' >
      <form onSubmit={handleCreate}>
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
                <input type='date' className='date' required/>
                <input type='date' className='date' required/>
               </div>
                </div>
               <div>
               </div>
              <div className="task-content">
                <h5>Description</h5>
              <textarea name="postContent" rows={6} value={data.postContent} onChange={handleChange}  />
          
              </div>
              <button onClick={handleCreate} id='button' type='submit'>Create Task</button>
            </div>
            
      </form>
            </div>
  )
}

export default Add
