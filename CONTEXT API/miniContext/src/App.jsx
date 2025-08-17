import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1>React with Avi</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
