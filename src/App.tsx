import {Outlet} from 'react-router-dom'
import './App.css'
import Navbar from './navbar'

function App() {
  

  return (
    <>
      <div className='cima'><h1>Ultimo Trabalho</h1></div>
      <div className='baixo'>
       <Outlet/>
    </div>
     <div className='nav'>
      <Navbar/>
     </div>
     
    </>
  
  )
}

export default App
