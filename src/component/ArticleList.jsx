import React from 'react'
import WritterInfo from './WritterInfo'

const ArticleList = ({data}) => {
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