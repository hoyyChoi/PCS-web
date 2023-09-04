import React from 'react';
import ArticleContainer from './ArticleContainer';
import ArticleTitle from './ArticleTitle';
import {getIdArticle} from '../../remote/index';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {eachArticeState} from '../../atoms/auth';
import {useParams} from 'react-router-dom';

const ArticleDetail = () => {
	const [Articledata, setArticleData] = useRecoilState(eachArticeState);

	useEffect(() => {
		getIdArticle(localStorage.getItem('ID')).then(res => {
			setArticleData(res.data);
		});
	}, [localStorage.getItem('ID')]);

	return (
		<div className="article-page">
			<ArticleTitle data={Articledata} />
			<ArticleContainer data={Articledata} />
		</div>
	);
};

export default ArticleDetail;
