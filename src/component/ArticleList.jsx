import React from 'react'
import WritterInfo from './WritterInfo'

const ArticleList = ({data}) => {

  // data.slug를 상태에 업데이트를 시켜서 Api 연결 get slug -> ARTICLE DETAIL 컴포넌트 -> 업데이트된 정보를  뿌려준다.
  return (
<div className="article-preview">
    <div className="article-meta">
        <WritterInfo data={data}/>    
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> 
            </button> 
    </div>
    <a href="" className="preview-link">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <span>Read more...</span>
    </a>
</div>
  )
}

export default ArticleList