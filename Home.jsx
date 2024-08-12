import React from 'react'
import AddTask from './AddTask'
import {useNavigate} from "react-router"

function Home() {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("start");
    }
  return (
       <div className='page1'>
         <div className='content'>
               <div >
               <img src="../../public/todo-list-img.jpeg"  /> 
               </div>
               <div >
                <h2>Welcome to Go Task</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga facere error laudantium assumenda! Saepe, nihil, iste vitae architecto cum aliquid quasi harum dolore totam sunt distinctio magni, incidunt aperiam!</p>
               </div>
               <button className="pointer" onClick={handleClick}  id='button'> Let's Start </button>
            </div> 
       </div>
  )
}

export default Home
