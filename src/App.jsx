import './App.css'
import './bootstrap.min.css'
import Header from './Components/Header'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/dash" element={<Dashboard />} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
