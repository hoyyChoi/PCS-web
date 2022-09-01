import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import { Routes, Route } from "react-router-dom";
import Signin from './component/Signin';
import Signup from './component/Signup';
import Settings from './component/Settings';
import Newarticle from './component/Newarticle';
import Profile from './component/Profile';
import ArticleDetail from './component/ArticleDetail';

function App() {


  return (
    <div>
      
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Signin />}/>
          <Route path='/register' element={<Signup />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/editor' element={<Newarticle />}/> 
          <Route path='/a' element={<Profile />}/> 
          <Route path='/b' element={<ArticleDetail />}/> 

        </Routes>

      <Footer />
      
    </div>
  )
}

export default App
