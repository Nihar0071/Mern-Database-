import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/about'
import Header from './components/Header'
export default function App() {
  return ( 
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/SignIn' element = {<Signin/>} />
    <Route path='/SignUp' element = {<SignUp/>} />
    <Route path='/Profile' element = {<Profile/>} />
    <Route path='/About' element = {<About/>} />
    
  </Routes>
  </BrowserRouter>
  )
}
 