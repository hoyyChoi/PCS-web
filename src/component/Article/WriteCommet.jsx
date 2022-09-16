import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRecoilValue,useRecoilState } from 'recoil'
import { commentsState, slugState} from '../../atoms/auth'
import { postComment } from '../../remote/index'

const WriteCommet = () => {
  
  const [body,setTextComment] = useState('')
  const slug = useRecoilValue(slugState)
  const [comments,setComments] = useRecoilState(commentsState)
 
  
    const submitComment = (e) =>{
      e.preventDefault()
  
      postComment(slug,{body})
      .then(res=>{
          setComments([...comments,res.data.comment])
          //rerender 되면서 코멘트 부분이 추가됨. 페이지 전환
      }).catch(err=>{
          console.log(err)
      })

      setTextComment('')
      
    }

  
  
return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <form className="card comment-form" onSubmit={(e)=>submitComment(e)}>
          <div className="card-block">
            <textarea
              className="form-control"
              placeholder="Write a comment..."
              rows="3" value={body} onChange={(e)=>setTextComment(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="card-footer">
            <img
              src="https://api.realworld.io/images/smiley-cyrus.jpeg"
              className="comment-author-img"
            />
            <button className="btn btn-sm btn-primary" type='submit'>Post Comment</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default WriteCommet