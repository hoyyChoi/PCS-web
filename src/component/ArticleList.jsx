import React from 'react'
import WritterInfo from './WritterInfo'

const ArticleList = () => {
  return (
<div className="article-preview">
    <div className="article-meta">
        <WritterInfo />    
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> 
            </button> 
    </div>
    <a href="" className="preview-link">
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
    </a>
</div>
  )
}

export default ArticleList