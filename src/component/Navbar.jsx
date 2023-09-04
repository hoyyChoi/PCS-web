import React from 'react';
import {Link} from 'react-router-dom';

// <li> 테그에 있는 데이터들을 배열로 이동 시킨후, map 내장함수를 이용해서 뿌려준다
// 로그인 했을떄랑 안했을때 보여지는게 다른데 그 부분을 배열로 표현 할 수 있는지.

// Login/Logout 시 Navbar의 내용 구분
// Login : Home / NewArticle / Settings / username
// Logout : Home / Sign in / Sign up

// Api 연동 X
// ->임의로 boolean 값을 state 변수에 넣어 사용 (UI로 확인하기 위해)
// True : login
// False : logout
// { user(state변수)? <>로그인했을때 네브바</> : <>로그인 안했을때 네브바</> }

const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src="/kusitm.svg" alt="큐시즘" width={50} />
					<div>kusitms</div>
				</Link>

				<ul className="nav navbar-nav pull-xs-right">
					<li className="nav-item">
						<Link className="nav-link" to="/editor">
							<i className="ion-compose"></i>&nbsp;글쓰기
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
