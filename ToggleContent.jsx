import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../feature/todoSlice';
import UpdateTask from './UpdateTask';
import { useNavigate } from 'react-router';
const ToggleContent = (props) => {
    const {task}=props;
  const [isVisible, setIsVisible] = useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const handleDelete=(value)=>{
    dispatch(deleteTask(value));
  }
  const handleUpdate=(tasks)=>{
    console.log(tasks);
    navigate("/update",{state:{"task":tasks}});
  }
 
  return (
    <div className="containers">
      <div className="toggle" onClick={handleToggle}>
        {isVisible ? `▼  ${task.name}`: `▶ ${task.name}`}
      </div>
      {isVisible && (
        <div className="contents">
          <p className='task-contents' >  {task.postContent}</p>
          <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"10px"}}><span>{task.start}</span> <span>{task.end}</span> </div>
          <div style={{display:"flex", flexDirection:"row",justifyContent:'space-between'}}>
          <button id='button' style={{margin:"0 5px"}} onClick={()=>{
                handleUpdate(task);
          }}  >Update</button>
          <button id='button' style={{margin:"0 5px"}} onClick={()=>{
            handleDelete(task.name);
          }} >Delete</button>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default ToggleContent;
