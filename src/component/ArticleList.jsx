import React from 'react'
import WritterInfo from './WritterInfo'

const ArticleList = () => {
  return (
<div class="article-preview">
    <div class="article-meta">
        <WritterInfo />    
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
                    <i class="ion-heart"></i> 
            </button> 
    </div>
    <a href="" class="preview-link">
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
    </a>
</div>
  )
}

export default ArticleList