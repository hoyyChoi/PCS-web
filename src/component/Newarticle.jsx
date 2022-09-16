import React from 'react'
import { useState } from 'react'
import { createArticle } from '../remote/index'
import { useRecoilValue } from 'recoil'
import { userState } from '../atoms/auth'
import { useRecoilState } from 'recoil'
import { slugState } from '../atoms/auth'
import { useNavigate } from 'react-router-dom'

const Newarticle = () => {

    const user = useRecoilValue(userState)
    const [slug,setSlug] = useRecoilState(slugState)

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [body,setBody] = useState('')
    const [tag,setTag] = useState([''])

    const navigate =useNavigate()

    const submitArticle = (e)=>{
        e.preventDefault()

        createArticle({title,description,body,tag})
        .then(res=>{
            setSlug(res.data.article.slug)
            localStorage.setItem('slug',res.data.article.slug)
            navigate(`/article/${localStorage.getItem('slug')}`)
        }).catch(err=>{
            alert('이미 있는 제목입니다.')
        })
    }



  return (
    <div className="editor-page">
    <div className="container page">
        <div className="row">

            <div className="col-md-10 offset-md-1 col-xs-12">
                <form onSubmit={(e)=>submitArticle(e)}>
                    <fieldset>
                        <fieldset className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Article Title" value={title} onChange={(e)=>setTitle(e.currentTarget.value)}/>
                        </fieldset>
                        <fieldset className="form-group">
                            <input type="text" className="form-control" placeholder="What's this article about?" value={description} onChange={(e)=>setDescription(e.currentTarget.value)}/>
                        </fieldset>
                        <fieldset className="form-group">
                            <textarea className="form-control" rows="8"
                                      placeholder="Write your article (in markdown)" value={body} onChange={(e)=>setBody(e.currentTarget.value)}></textarea>
                        </fieldset>
                        <fieldset className="form-group">
                            <input type="text" className="form-control" placeholder="Enter tags" value={tag} onChange={(e)=>setTag(e.currentTarget.value)}/>
                            <div className="tag-list"></div>
                        </fieldset>
                        <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                            Publish Article
                        </button>
                    </fieldset>
                </form>
            </div>

        </div>
    </div>
</div>
  )
}

export default Newarticle