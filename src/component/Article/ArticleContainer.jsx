import React from 'react'
import ArticleContents from './ArticleContents'
import ShowComment from './ShowComment'
import WriteCommet from './WriteCommet'

const ArticleContainer = ({data}) => {
  return (
    <div className="container page">

    <ArticleContents data={data}/>
    <WriteCommet />
    <ShowComment />

</div>
  )
}

export default ArticleContainer