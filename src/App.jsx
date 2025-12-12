import { Route, Routes } from 'react-router'
import './App.css'
import MainContainer from './components/base/MainContainer'
import Login from './components/auth/Login'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainContainer />} />
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default App
