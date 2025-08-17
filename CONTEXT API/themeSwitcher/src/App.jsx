import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContextProvider } from "./Contexts/theme";
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'

function App() {
  const [themeMode,setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
            <ThemeBtn></ThemeBtn>
            
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card>  </Card>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
