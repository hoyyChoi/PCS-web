import React from "react";
import { useRecoilState } from "recoil";
import { profileState } from "../atoms/auth";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../remote/index";



const WritterInfo = ({data}) => {
  
  const [profile,setProfile] = useRecoilState(profileState)
  const navigate = useNavigate()

  const spaceProfile = () =>{
    getProfile(data.author.username)
    .then((res)=>{
        setProfile(res.data.profile)
        navigate('/a')
    }).catch((err)=>{
        console.log(err)
     })
  }
    
 
  return (
    
      <div style={{'display':'inline'}}>
          <a onClick={spaceProfile} style={{cursor:'pointer'}}>
            <img src={data&&data.author.image} />
          </a>
          <div className="info">
            <a onClick={spaceProfile} className="author" style={{cursor:'pointer'}}>
              {data&&data.author.username}
            </a>
            <span className="date">{data&&data.createdAt}</span>
          </div>
      </div>
  );
};

export default WritterInfo;
