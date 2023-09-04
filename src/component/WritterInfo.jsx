import React from 'react';

const WritterInfo = ({data}) => {
	return (
		<div style={{display: 'inline'}}>
			<img src="/kusitm.svg" alt="author" />

			<div className="info">
				{data.articleId}

				<span className="date">{data.createdAt}</span>
			</div>
		</div>
	);
};

export default WritterInfo;
