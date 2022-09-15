import React from 'react'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { slugState } from '../atoms/auth'
import WritterInfo from './WritterInfo'

const ArticleList = ({data}) => {

  const navigate = useNavigate()
  const [slug,setSlug] = useRecoilState(slugState)
  const spaceArticle = () =>{
    localStorage.setItem('slug',data.slug)
    setSlug(data.slug)
    navigate('/b')
  }

  // data.slug를 상태에 업데이트를 시켜서 Api 연결 get slug -> ARTICLE DETAIL 컴포넌트 -> 업데이트된 정보를  뿌려준다.
  return (
<div className="article-preview">
    <div className="article-meta">
        <WritterInfo data={data}/>    
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> 
            </button> 
    </div>
    <div onClick={spaceArticle} className="preview-link" style={{cursor:'pointer'}}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <span>Read more...</span>
    </div>
</div>
  )
}

export default ArticleList