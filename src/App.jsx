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
import ArticleDetail from './component/Article/ArticleDetail';
import {useRecoilState} from 'recoil'
import {authState,userState} from './atoms/auth'
import { useEffect } from 'react';
import { getLoginUser } from './remote/index';

function App() {

  const [auth,setAuth] = useRecoilState(authState)
  const [user,setUserState] = useRecoilState(userState)

  useEffect(()=>{
    if(localStorage.getItem('token')){
      getLoginUser()
      .then(res=>{
        setUserState(res.data.user)
        setAuth(true)
      }).catch(err=>{
        console.log(err)
      })
      
    }else{
      setAuth(false)
    }
  },[])
  
  return (
    <div>
      <Navbar/>
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Signin />}/>
          <Route path='/register' element={<Signup />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/editor' element={<Newarticle />}/> 
          <Route path='/:username' element={<Profile />}/> 
          <Route path='/article/:slug' element={<ArticleDetail />}/> 
        </Routes>
      <Footer />
    </div>
  )
}

export default App
