import React from 'react';

const ArticleContents = ({data}) => {
	return (
		<div className="row article-content">
			<div className="col-md-12">
				<p>{data.body}</p>
			</div>
			<div className="tag-list">
				{data.tagList.map(data => (
					<p className="tag-pill tag-default">{data}</p>
				))}
			</div>
		</div>
	);
};

export default ArticleContents;
