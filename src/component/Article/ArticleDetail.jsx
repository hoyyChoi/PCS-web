import React from 'react'
import ArticleContainer from './ArticleContainer'
import ArticleTitle from './ArticleTitle'
import { getSlugArticle,getLoginComment,getComment } from '../../remote/index'
import { useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { slugState, authState, commentsState } from '../../atoms/auth'
import { useState } from 'react'

const ArticleDetail = () => {

  const slug = useRecoilValue(slugState)
  const [data,setArticleData]=useState()
  const [comments, setComments] = useRecoilState(commentsState);
  const auth = useRecoilValue(authState)

  useEffect(()=>{
    getSlugArticle(localStorage.getItem('slug'))
    .then(res=>{
      setArticleData(res.data.article)
    }).catch(err=>{
      console.log(err)
    })
    auth ? (getLoginComment(localStorage.getItem('slug'))
      .then((res) => {
        setComments(res.data.comments)
      })
      .catch((err) => {
        console.log(err);
      })) 
      : (getComment(localStorage.getItem('slug'))
      .then((res) => {
        setComments(res.data.comments)
      })
      .catch((err) => {
        console.log(err);
      })) 
  },[localStorage.getItem('slug')])


  return (
    <div className="article-page">
      <ArticleTitle data={data}/>
      <ArticleContainer data={data}/>
    </div>
  )
}

export default ArticleDetail