import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { postRegisterUser } from '../remote'
import { useRecoilState,useSetRecoilState } from 'recoil'
import { authState,userState } from '../atoms/auth'

const Signup = () => {

    let navigate = useNavigate()
   

    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const [user,setUserState] = useRecoilState(userState)
    const setAuth = useSetRecoilState(authState)
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       
        postRegisterUser({username,email,password})
        .then(res=>{
            setUserState(res.data.user)
            setAuth(true)
            navigate('/')
           
        })
        .catch((err)=>console.log(err));
     
}


  return (
    <div className="auth-page">
    <div className="container page">
        <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Sign up</h1>
                <p className="text-xs-center">
                    <a href="/login">Have an account?</a>
                </p>

                <ul className="error-messages">
                    <li>That email is already taken</li>
                </ul>

                <form onSubmit={(e)=>handleSubmit(e)}>
                    <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="text" placeholder="Your Name"
                        value={username}  onChange={(event)=>{setUsername(event.currentTarget.value)}}/>
                    </fieldset>
                    <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="email" placeholder="Email"
                        value={email} onChange={(event)=>{setEmail(event.currentTarget.value)}}/>
                    </fieldset>
                    <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="password" placeholder="Password"
                        value={password} onChange={(event)=>{setPassword(event.currentTarget.value)}}/>
                    </fieldset>
                    <button className="btn btn-lg btn-primary pull-xs-right" type="submit" 
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