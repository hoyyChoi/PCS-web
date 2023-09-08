import React from 'react';

const WritterInfo = ({data}) => {
	let day = new Date(data?.createdAt);
	return (
		<div style={{display: 'inline'}}>
			<img src="/kusitm.svg" alt="author" />

			<div className="info">
				{data?.articleId}

				<span className="date">{day.toLocaleString()}</span>
			</div>
		</div>
	);
};

export default WritterInfo;
