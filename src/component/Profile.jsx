import React, { useEffect } from 'react'
import { useRecoilState,useRecoilValue } from 'recoil'
import { profileState,userState } from '../atoms/auth'
import { getProfile } from '../remote'
import Article from './ArticleList'

const Profile = () => {
    
    const [profile,setProfile] = useRecoilState(profileState)
    const user = useRecoilValue(userState)
  
  

    useEffect(()=>{
        getProfile(user.username)
    .then((res)=>{
        setProfile(res.data.profile)
    }).catch((err)=>{
        console.log(err)
    })
    },[])
  
    return (
    <div className="profile-page">

    <div className="user-info">
        <div className="container">
            <div className="row">

                <div className="col-xs-12 col-md-10 offset-md-1">
                    <img src={profile.image} className="user-img"/>
                    <h4>{profile.username}</h4>
                    <p>
                        {profile.bio}
                    </p>
                    <button className="btn btn-sm btn-outline-secondary action-btn">
                        <i className="ion-plus-round"></i>
                        &nbsp;
                        Follow Eric Simons
                    </button>
                </div>

            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">

            <div className="col-xs-12 col-md-10 offset-md-1">
                <div className="articles-toggle">
                    <ul className="nav nav-pills outline-active">
                        <li className="nav-item">
                            <a className="nav-link active" href="">My Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Favorited Articles</a>
                        </li>
                    </ul>
                </div>

                <Article />
                <Article />

                


            </div>

        </div>
    </div>

</div>
  )
}

export default Profile