import React from 'react'

const ArticleContents = ({data}) => {
  return (
    <div className="row article-content">
    <div className="col-md-12">
        <p>
            {data&&data.body}
        </p>
        
    </div>
</div>
  )
}

export default ArticleContents