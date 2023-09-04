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

	let {Id} = useParams();

	useEffect(() => {
		console.log(Id);
		getIdArticle(Id).then(res => {
			console.log(Id);
			setArticleData(res.data);
		});
	}, [id]);

	return (
		<div className="article-page">
			<ArticleTitle data={Articledata} />
			<ArticleContainer data={Articledata} />
		</div>
	);
};

export default ArticleDetail;
