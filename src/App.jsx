import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Body from './Components/Body'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

function App() {

  const [meteo, setMeteo] = useState(null)

  const handleMeteoUpdate = (newMeteo) => {
    setMeteo(newMeteo)
  }

  return (
     <>
      <Header />
      <div className=' d-flex p-5 p-sm-0'>
      <div className='container  mt-2  shadow rounded-4 '>
        <Body handleMeteoUpdate={handleMeteoUpdate} meteo={meteo} />
      </div>
      </div>
      
     </>
  )
}



export default App
