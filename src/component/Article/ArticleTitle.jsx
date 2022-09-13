import React from "react";
import WritterInfo from "../WritterInfo";

const ArticleTitle = ({data}) => {

  console.log(data)
  return (
    <div className="banner">
      <div className="container">
        <h1>{data&&data.title}</h1>

        <div className="article-meta">
          <WritterInfo data={data}/>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-plus-round"></i>
            &nbsp; Follow {data.author.username} 
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>
            &nbsp; Favorite Post <span className="counter">({data.favoritesCount})</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleTitle;
