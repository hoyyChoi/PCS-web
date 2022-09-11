import React from "react";

const WritterInfo = ({data}) => {
  return (
    
      <div style={{'display':'inline'}}>
          <a href="">
            <img src={data.author.image} />
          </a>
          <div className="info">
            <a href="" className="author">
              {data.author.username}
            </a>
            <span className="date">{data.createdAt}</span>
          </div>
      </div>
  );
};

export default WritterInfo;
