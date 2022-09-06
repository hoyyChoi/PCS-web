import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { postLoginUser } from '../remote'
import { userState } from '../atoms/auth'
import { useRecoilState } from 'recoil'

const Signin = ({setAuth}) => {

    let navigate = useNavigate()
    const loginUser = () =>{
        setAuth(true)
        navigate('/')
    }



    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUserState] = useRecoilState(userState)

    
    const handleSubmit = (e)=>{
        e.preventDefault()

        postLoginUser({email,password})
        .then(async(res)=>{
            await setUserState(res.data.user)
            console.log(user)
        }
        ).catch(err=>
            console.log(err)
        )
    }

   
    
    
    
  return (
    <div class="auth-page">
    <div class="container page">
        <div class="row">

            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Sign in</h1>
                <p class="text-xs-center">
                    <a href="/register">Need an account?</a>
                </p>


                <form onSubmit={(e)=>handleSubmit(e)}>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="email" placeholder="Email" value={email} onChange={(event)=>setEmail(event.currentTarget.value)}/>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="password" placeholder="Password" value={password} onChange={(event)=>setPassword(event.currentTarget.value)}/>
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right" type='submit'>
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