import React, { useEffect,useState } from 'react'
import { useRecoilState,useRecoilValue } from 'recoil'
import { profileState,userState } from '../atoms/auth'
import { getProfile } from '../remote'
import { getArticles } from '../remote/index'
import ArticleList from './ArticleList'


const Profile = () => {

    const profile = useRecoilValue(profileState)
    const user = useRecoilValue(userState)
    let [articleData,setArticleData] = useState([])
    
    useEffect(()=>{
       getArticles(profile.username,{user})
       .then(res=>{
        setArticleData(res.data.articles)
        
       }).catch(err=>
        console.log(err))
       
       
        // get을 호출 파라미터로 들어가는게 위에서는 user(나자신이름), or 상대방 이미지 눌렀을때 이름을 전달하는것, api주소
        // ->article for profile 밑에 뿌려준다.
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
                
                {articleData.map((data)=><ArticleList data={data}/>)} 
                {/* 이 부분은 선택한(클릭시), 유저나 상대방이미지 및 이름을 눌렀을때, 거기에 대한 Article */}
            
            </div>

        </div>
    </div>

</div>
  )
}

export default Profile