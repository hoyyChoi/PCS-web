import React from 'react';
import {useNavigate} from 'react-router-dom';
import {deleteIdArticle, getIdArticle} from '../../remote/index';
import WritterInfo from '../WritterInfo';
import {useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {modifyState} from '../../atoms/index';

const ArticleTitle = ({data}) => {
	let navigate = useNavigate();
	const [article, setArticle] = useRecoilState(modifyState);
	let {id} = useParams();

	const deleteArticle = () => {
		deleteIdArticle(data.articleId)
			.then(res => {
				navigate('/');
			})
			.catch(err => {
				console.log(err);
				alert('a  r   t    ic    le    은 지울 수 없 습 니 다 .');
			});
	};

	const putArticle = () => {
		getIdArticle(id).then(res => {
			setArticle(res.data.data);
			navigate(`/modify/article/${id}`);
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
