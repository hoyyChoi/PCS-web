import React from "react";
import WritterInfo from "../WritterInfo";

const ArticleComment = () => {



  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <div className="card">
          <div className="card-block">
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div className="card-footer">
            <div className="article-meta">
              <WritterInfo />
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-block">
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div className="card-footer">
            <div className="article-meta" style={{'display':'inline'}}>
              <WritterInfo />
            </div>
            <span className="mod-options">
              <i className="ion-edit"></i>
              <i className="ion-trash-a"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleComment;
