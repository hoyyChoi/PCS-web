import React from 'react';
import {useNavigate} from 'react-router-dom';
import WritterInfo from './WritterInfo';

const ArticleList = ({data}) => {
	const navigate = useNavigate();
	const spaceArticle = () => {
		navigate(`/${data.articleId}`);
	};

	return (
		<div className="article-preview">
			<div className="article-meta">
				<WritterInfo data={data} />
				<div className="btn btn-outline-primary btn-sm pull-xs-right">
					<i className="ion-heart"></i>
				</div>
			</div>
			<div
				onClick={spaceArticle}
				className="preview-link"
				style={{cursor: 'pointer'}}
			>
				<h1>{data.title}</h1>
				<p>{data.description}</p>
				<span>더 보기...</span>
			</div>
		</div>
	);
};

export default ArticleList;
