import React from 'react'
import ArticleComment from './ArticleComment'
import ArticleContents from './ArticleContents'

const ArticleContainer = ({data}) => {
  return (
    <div className="container page">

    <ArticleContents data={data}/>
    <ArticleComment />
    <hr/>


   

</div>
  )
}

export default ArticleContainer