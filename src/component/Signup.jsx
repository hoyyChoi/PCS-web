import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { postRegisterUser } from '../remote'

const Signup = ({setAuth}) => {

    let navigate = useNavigate()
    const registerUser = () =>{
        setAuth(true)
        navigate('/')
    }

    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       
        postRegisterUser({username,email,password})
        .then(res=>{
            
            console.log(res);
           
        })
        .catch((err)=>console.log(err));
     
}


  return (
    <div class="auth-page">
    <div class="container page">
        <div class="row">

            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Sign up</h1>
                <p class="text-xs-center">
                    <a href="/login">Have an account?</a>
                </p>

                <ul class="error-messages">
                    <li>That email is already taken</li>
                </ul>

                <form onSubmit={(e)=>handleSubmit(e)}>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="text" placeholder="Your Name"
                        value={username}  onChange={(event)=>{setUsername(event.currentTarget.value)}}/>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="email" placeholder="Email"
                        value={email} onChange={(event)=>{setEmail(event.currentTarget.value)}}/>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="password" placeholder="Password"
                        value={password} onChange={(event)=>{setPassword(event.currentTarget.value)}}/>
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right" type="submit" 
                     >
                        Sign up
                    </button>
                </form>
            </div>

        </div>
    </div>
</div>
  )
}

export default Signup