import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes, Route} from 'react-router-dom';
import Newarticle from './component/Newarticle';
import ArticleDetail from './component/ArticleDetail';
import ModifyArticle from './component/ModifyArticle';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/editor" element={<Newarticle />} />
				<Route path="/article/:id" element={<ArticleDetail />} />
				<Route path="/modify/article" element={<ModifyArticle />} />
			</Routes>
		</div>
	);
}

export default App;
