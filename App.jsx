import React from 'react'
import Home from './components/Home'

import { Route, Routes } from 'react-router'
import AddTask from './components/AddTask'
import Add from './components/Add'
import UpdateTask from './components/UpdateTask'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/start' element={<AddTask/>}/>
        <Route path="/start/add" element={<Add/>}/>
        <Route path="/update" element={<UpdateTask/>}/>
      </Routes>
    </div>
  )
}

export default App
