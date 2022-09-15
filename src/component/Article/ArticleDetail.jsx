import React from 'react'
import ArticleContainer from './ArticleContainer'
import ArticleTitle from './ArticleTitle'
import { getSlugArticle } from '../../remote/index'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { slugState } from '../../atoms/auth'
import { useState } from 'react'

const ArticleDetail = () => {

  const slug = useRecoilValue(slugState)
  const [data,setArticleData]=useState()
  

  useEffect(()=>{
    getSlugArticle(localStorage.getItem('slug'))
    .then(res=>{
      setArticleData(res.data.article)
    })
  },[])


  return (
    <div className="article-page">
      <ArticleTitle data={data}/>
      <ArticleContainer data={data}/>
    </div>
  )
}

export default ArticleDetail