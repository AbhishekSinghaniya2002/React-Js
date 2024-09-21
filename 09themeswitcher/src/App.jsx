
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
     setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
   
  }, [themeMode])
  


  return (
    // yaha par maine pure ko hi rap kar diya hai them provider me . 
    // yaha par ye mujhe pata hai ki ye method hai lekin ye nahi malum ki ye kya karte hai.
    // to in method ko lo As it is aur exactly issi naam ke hum method difine karenge tab vo functionality apne aap inke under chali jayegi .

// yaha par inki functionality define nahi hai .
    <ThemeProvider value={{themeMode, lightTheme , darkTheme}}> 
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
