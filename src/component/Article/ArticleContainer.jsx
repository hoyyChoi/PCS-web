import React from 'react'
import { useRecoilValue } from 'recoil'
import { authState } from '../../atoms/auth'
import ArticleContents from './ArticleContents'
import ShowComment from './ShowComment'
import WriteCommet from './WriteCommet'
import { Link } from 'react-router-dom'

const ArticleContainer = ({data}) => {

  const auth = useRecoilValue(authState)
  return (
    <div className="container page">

    <ArticleContents data={data}/>
    {auth?<WriteCommet />:<div style={{textAlign:'center', margin:'10px'}}>
      <Link to="/login">sign in</Link> or <Link to="/register">sign up</Link>
    </div>}
    <ShowComment />

</div>
  )
}

export default ArticleContainer