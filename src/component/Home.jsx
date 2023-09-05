import React from 'react';
import ArticleList from './ArticleList';
import {useEffect, useState} from 'react';
import {getGlobalArticles} from '../remote/index';

const Home = () => {
	let [articleData, setArticleData] = useState([]);

	useEffect(() => {
		getGlobalArticles().then(res => {
			setArticleData(res.data);
		});
	}, []);

	return (
		<div className="home-page">
			<div className="banner" style={{display: 'flex'}}>
				<img className="img1" src="kk.png" alt="zz" />
				<div className="container">
					<h1 className="logo-font">kusitms</h1>
					<p>파트 크로스 스터디에 오신 걸 환영합니다!</p>
				</div>
				<img className="img2" src="kk.png" alt="zz" />
			</div>

			<div className="container page">
				<div className="row">
					<div className="col-md-9">
						<div className="feed-toggle">
							<ul className="nav nav-pills outline-active">
								<li className="nav-item">
									<a className="nav-link active" href="">
										전체 보기
									</a>
								</li>
							</ul>
						</div>

						{articleData.map((data, idx) => (
							<React.Fragment key={idx}>
								<ArticleList data={data} />
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
