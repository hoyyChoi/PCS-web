import React from 'react';
import ArticleContainer from './Article/ArticleContainer';
import ArticleTitle from './Article/ArticleTitle';
import {getIdArticle} from '../remote/index';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {eachArticeState} from '../atoms/auth';
import {useParams} from 'react-router-dom';

const ArticleDetail = () => {
	const [Articledata, setArticleData] = useRecoilState(eachArticeState);
	let {id} = useParams();
	useEffect(() => {
		getIdArticle(id)
			.then(res => {
				setArticleData(res.data);
			})
			.catch(err => console.log(err));
	}, [id]);

	return (
		<div className="article-page">
			<ArticleTitle data={Articledata} />
			<ArticleContainer data={Articledata} />
		</div>
	);
};

export default ArticleDetail;
