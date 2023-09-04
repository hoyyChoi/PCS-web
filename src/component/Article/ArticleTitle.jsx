import React from 'react';
import {useNavigate} from 'react-router-dom';
import {deleteIdArticle} from '../../remote/index';
import WritterInfo from '../WritterInfo';

const ArticleTitle = ({data}) => {
	const navigate = useNavigate();

	const deleteArticle = () => {
		deleteIdArticle(data.articleId)
			.then(res => {
				navigate('/');
			})
			.catch(err => {
				console.log(err);
				alert('article은 지울 수 없습니다.');
			});
	};

	const putArticle = () => {
		// 수정하기로 이동
		alert('준비중입니다. 기달려주세요');
	};

	return (
		<div className="banner">
			<div className="container">
				<h1>{data.title}</h1>

				<div className="article-meta">
					<WritterInfo data={data} />
					<button
						className="btn btn-sm btn-outline-primary"
						onClick={putArticle}
					>
						<i className="ion-compose"></i>
						&nbsp; 글 수정
					</button>
					&nbsp;&nbsp;
					<button
						className="btn btn-sm btn-outline-primary"
						onClick={deleteArticle}
					>
						<i class="ion-trash-a"></i>
						&nbsp; 글 지우기
					</button>
				</div>
			</div>
		</div>
	);
};

export default ArticleTitle;
