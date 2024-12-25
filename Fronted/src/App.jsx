import React from 'react'
import Signup from './component/Signup'
import Navbar from './component/Navbar'
import Tododestinations from './component/Tododestinations'
import Login from './component/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/user/register' element={<Signup />}></Route>
          <Route path='/user/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>


    </div>


  )
}

export default App
