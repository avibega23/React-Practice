import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  function changeColor(color)
  {
    setColor(color)
  }
  return (
    <>
      <div className={`w-full h-screen`} style={{ backgroundColor: color }}>
        <div className={"fix  ed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"}>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" onClick={()=>{changeColor("red")}} style={{backgroundColor:"red"} } >Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" onClick={()=>{changeColor("black")}} style={{backgroundColor:"black"}} >Black</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm" onClick={()=>{changeColor("white")}} style={{backgroundColor:"white"}} >White</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" onClick={()=>{changeColor("blue")}} style={{backgroundColor:"blue"}} >Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" onClick={()=>{changeColor("green")}} style={{backgroundColor:"green"}} >Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" onClick={()=>{changeColor("teal")}} style={{backgroundColor:"teal"}} >Teal</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" onClick={()=>{changeColor("orange")}} style={{backgroundColor:"orange"}} >Orange</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" onClick={()=>{changeColor("purple")}} style={{backgroundColor:"purple"}} >Purple</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" onClick={()=>{changeColor("gray")}} style={{backgroundColor:"gray"}} >Gray</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm" onClick={()=>{changeColor("yellow")}} style={{backgroundColor:"yellow"}} >Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm" onClick={()=>{changeColor("cyan")}} style={{backgroundColor:"cyan"}} >Cyan</button>
          </div>
        </div>
      </div>
   </>
  )
}

export default App
