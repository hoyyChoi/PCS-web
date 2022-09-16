import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { commentsState } from "../../atoms/auth";
import { deleteSlugArticle } from "../../remote/index";
import WritterInfo from "../WritterInfo";


const ArticleTitle = ({data}) => {

  const navigate = useNavigate()
  

  const deleteArticle =()=>{
    deleteSlugArticle(data.slug)
    .then(res=>{
      navigate('/')
    }).catch(err=>{
      console.log(err)
      alert('다른 상대방의 article은 지울 수 없습니다.')
    })
  }

  return (
    <div className="banner">
      <div className="container">
        <h1>{data&&data.title}</h1>

        <div className="article-meta">
          <WritterInfo data={data}/>
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>
            &nbsp; Favorite Post <span className="counter">({data&&data.favoritesCount})</span>
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-sm btn-outline-primary" onClick={deleteArticle}>
            <i class="ion-trash-a"></i>
            &nbsp; Delete 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleTitle;
