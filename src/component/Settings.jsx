import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getLoginUser } from '../remote'

const Settings = ({setAuth}) => {

    let navigate = useNavigate()

    const logOut = () =>{
        setAuth(false)
        navigate("/")
    }

    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    
    // const handleSubmit = (e)=>{
    //     e.preventDefault()

    //     getLoginUser()
    //     .then(res=>
    //         console.log(res)
            
    //     ).catch(err=>
    //         console.log(err)
    //     )
    // }


  return (
    <div class="settings-page">
    <div class="container page">
        <div class="row">

            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Your Settings</h1>

                <form onSubmit={(e)=>handleSubmit(e)}>
                    <fieldset>
                        <fieldset class="form-group">
                            <input class="form-control" type="text" placeholder="URL of profile picture"/>
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="text" placeholder="User Name" value={username} onChange={(event)=>setUsername(event.currentTarget.value)} />
                        </fieldset>
                        <fieldset class="form-group">
                            <textarea class="form-control form-control-lg" rows="8"
                                      placeholder="Short bio about you"></textarea>
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="email" placeholder="Email" value={email} onChange={(event)=>setEmail(event.currentTarget.value)}/>
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="password" placeholder="Password"/>
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            Update Settings
                        </button>
                    </fieldset>
                    <button class="btn btn-outline-danger" ng-click="$ctrl.logout()" onClick={logOut}>
                        Or click here to logout.
                    </button>
                </form>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Settings