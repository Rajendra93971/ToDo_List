import React from 'react'
import "../main.css";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import ToggleContent from './ToggleContent';
function AddTask() {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("add");
  }
  const dispatch=useDispatch();
  const tasks=useSelector((state)=>state.task)
  return (
    <div className='page1' >
        <div className='content' >
            <div className="nav-bar">
                <div> <i className="bi bi-border-style"></i> </div>
                <div style={{fontWeight:"bold"}}>Homepage</div>
                <div><i className="bi bi-app-indicator"></i></div>
            </div>
              {/* <div  className='all-task'>
              {tasks.map((task)=>{
               return(
                <div key={task.name} className='one-task'  > 
                <div className='task-part'>
                  <h5> {task.name} </h5>
                  <span > {task.start} </span> -
                  <span > {task.end} </span>
                  </div>
                  <span style={{fontSize:"20px"}} id='greater-than'>  &gt; </span> </div>

               )
              })}
              </div> */}
              <div>
              {tasks.map((task)=> <ToggleContent task={task} />)}
              </div>
              
            <button onClick={handleClick} id='button'> Add Task </button>
           
        </div>
    </div>
  )
}

export default AddTask
