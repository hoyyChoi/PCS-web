import React from 'react';
import {Link} from 'react-router-dom';

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
