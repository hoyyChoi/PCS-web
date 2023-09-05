import React from 'react';
import ArticleContainer from './Article/ArticleContainer';
import ArticleTitle from './Article/ArticleTitle';
import {getIdArticle} from '../remote/index';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useState} from 'react';

const ArticleDetail = () => {
	const [Articledata, setArticleData] = useState();
	let {id} = useParams();
	useEffect(() => {
		console.log(id);
		getIdArticle(id)
			.then(res => {
				setArticleData(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			{Articledata ? (
				<div className="article-page">
					<ArticleTitle data={Articledata} />
					<ArticleContainer data={Articledata} />
				</div>
			) : (
				''
			)}
		</>
	);
};

export default ArticleDetail;
