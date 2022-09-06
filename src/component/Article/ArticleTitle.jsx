import React from "react";
import WritterInfo from "../WritterInfo";

const ArticleTitle = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1>How to build webapps that scale</h1>

        <div className="article-meta">
          <WritterInfo />
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-plus-round"></i>
            &nbsp; Follow Eric Simons <span className="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>
            &nbsp; Favorite Post <span className="counter">(29)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleTitle;
