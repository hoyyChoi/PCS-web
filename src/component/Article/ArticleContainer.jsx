import React from 'react'
import { useRecoilValue } from 'recoil'
import { authState,commentsState } from '../../atoms/auth'
import ArticleContents from './ArticleContents'
import ShowComment from './ShowComment'
import WriteCommet from './WriteCommet'
import { Link } from 'react-router-dom'

const ArticleContainer = ({data}) => {

  const auth = useRecoilValue(authState)
  const comments = useRecoilValue(commentsState)

  return (
    <div className="container page">

    <ArticleContents data={data}/>
    <div style={{textAlign:'center'}}>댓글 갯수 : {comments.length}개</div>
    {auth ? <WriteCommet />
    :<div style={{textAlign:'center', margin:'10px'}}>
      <Link to="/login">sign in</Link> or <Link to="/register">sign up</Link>
    </div>}
    <ShowComment />

</div>
  )
}

export default ArticleContainer