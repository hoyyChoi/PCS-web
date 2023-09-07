import React from 'react';
import ArticleList from './ArticleList';
import {useEffect, useState} from 'react';
import {getGlobalArticles} from '../remote/index';
import {useNavigate} from 'react-router-dom';

const Home = () => {
	let [articleData, setArticleData] = useState();
	const navigate = useNavigate();

	const spaceWriter = () => {
		navigate('/editor');
	};

	useEffect(() => {
		getGlobalArticles().then(res => {
			setArticleData(res.data.data.reverse());
		});
	}, []);

	return (
		<>
			{articleData ? (
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
					<div className="floatingWriter" onClick={spaceWriter}>
						<img src="pencil.svg" alt="글쓰기" width={35} />
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Home;
