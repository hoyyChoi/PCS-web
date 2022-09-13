import React from 'react'

const Populartags = ({tags}) => {

  return (
    <div className="col-md-3">
        <div className="sidebar">
            <p>Popular Tags</p>

            <div className="tag-list">
               {tags.map((tagsData)=>
               <a href="" className="tag-pill tag-default">{tagsData}</a>
               )}
            </div>
        </div>
    </div>
  )
}

export default Populartags