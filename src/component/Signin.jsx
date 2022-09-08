import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { postLoginUser } from '../remote'
import { authState,userState } from '../atoms/auth'
import { useRecoilState,useSetRecoilState } from 'recoil'

const Signin = () => {

    let navigate = useNavigate()
    


    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUserState] = useRecoilState(userState)
    const setAuth = useSetRecoilState(authState)

    

    
    const handleSubmit = (e)=>{
        e.preventDefault()

        postLoginUser({email,password})
        .then((res)=>{
            setUserState(res.data.user)
            setAuth(true)
            navigate('/')
        }
        ).catch(err=>
            console.log(err)
        )
    }

   
    
    
    
  return (
    <div className="auth-page">
    <div className="container page">
        <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Sign in</h1>
                <p className="text-xs-center">
                    <a href="/register">Need an account?</a>
                </p>


                <form onSubmit={(e)=>handleSubmit(e)}>
                    <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="email" placeholder="Email" value={email} onChange={(event)=>setEmail(event.currentTarget.value)}/> 
                    </fieldset>
                    <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="password" placeholder="Password" value={password} onChange={(event)=>setPassword(event.currentTarget.value)}/>
                    </fieldset>
                    <button className="btn btn-lg btn-primary pull-xs-right" type='submit'>
                        Sign in
                    </button>
                </form>
            </div>

        </div>
    </div>
    </div>
    
  )
}

export default Signin