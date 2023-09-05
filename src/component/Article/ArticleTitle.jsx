import React from 'react';
import {useNavigate} from 'react-router-dom';
import {deleteIdArticle, getIdArticle} from '../../remote/index';
import WritterInfo from '../WritterInfo';
import {useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {modifyState} from '../../atoms/index';

const ArticleTitle = ({data}) => {
	const navigate = useNavigate();
	const [article, setArticle] = useRecoilState(modifyState);
	let {id} = useParams();

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
		getIdArticle(id).then(res => {
			setArticle(res.data);
			navigate('/modify/article');
		});
	};

	return (
		<div className="banner">
			<div className="container">
				<h1>{data?.title}</h1>

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
						<i className="ion-trash-a"></i>
						&nbsp; 글 지우기
					</button>
				</div>
			</div>
		</div>
	);
};

export default ArticleTitle;
