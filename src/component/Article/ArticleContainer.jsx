import React from 'react';
import ArticleContents from './ArticleContents';

const ArticleContainer = ({data}) => {
	return (
		<div className="container page">
			<ArticleContents data={data} />
		</div>
	);
};

export default ArticleContainer;
