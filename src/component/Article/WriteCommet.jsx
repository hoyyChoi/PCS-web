import React from 'react'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { slugState, userState } from '../../atoms/auth'
import { postComment } from '../../remote/index'

const WriteCommet = () => {
  
  const [body,setTextComment] = useState('')
  const slug = useRecoilValue(slugState)
  const user = useRecoilValue(userState)
   
  const submitComment = (e) =>{
    e.preventDefault()

    postComment(slug,{body},{user})
    .then(res=>{
        console.log(res)
        //rerender 되면서 코멘트 부분이 추가됨. 페이지 전환
    }).catch(err=>{
        console.log(err)
    })
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
              src="http://i.imgur.com/Qr71crq.jpg"
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