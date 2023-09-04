import React from 'react';
import {useState} from 'react';
import {postArticle} from '../remote/index';
import {useNavigate} from 'react-router-dom';

const Newarticle = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [body, setBody] = useState('');
	const [tag1, setTag1] = useState('STUDY');
	const [tag2, setTag2] = useState('HEALTH');
	const [tag3, setTag3] = useState('DRINK');

	const navigate = useNavigate();

	const submitArticle = e => {
		e.preventDefault();
		const tagList = [tag1, tag2, tag3];
		postArticle({title, description, body, tagList})
			.then(res => {
				localStorage.setItem('ID', res.data.articleId);
				navigate(`/article/${res.data.articleId}`);
			})
			.catch(err => {
				alert('태그는 STUDY,HEALTH,DRINK,OTHER 가능합니다');
			});
	};

	return (
		<div className="editor-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-10 offset-md-1 col-xs-12">
						<form onSubmit={e => submitArticle(e)}>
							<fieldset>
								<fieldset className="form-group">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="제목"
										value={title}
										onChange={e => setTitle(e.currentTarget.value)}
									/>
								</fieldset>
								<fieldset className="form-group">
									<input
										className="form-control"
										rows="8"
										placeholder="소제목"
										value={description}
										onChange={e => setDescription(e.currentTarget.value)}
									></input>
								</fieldset>
								<fieldset className="form-group">
									<textarea
										className="form-control"
										rows="8"
										placeholder="적고 싶은 내용"
										value={body}
										onChange={e => setBody(e.currentTarget.value)}
									></textarea>
								</fieldset>
								<fieldset className="form-group tag-form">
									<input
										type="text"
										className="form-control"
										placeholder="Enter tags"
										value={tag1}
										onChange={e => setTag1(e.currentTarget.value)}
									/>
									<input
										type="text"
										className="form-control"
										placeholder="Enter tags"
										value={tag2}
										onChange={e => setTag2(e.currentTarget.value)}
									/>
									<input
										type="text"
										className="form-control"
										placeholder="Enter tags"
										value={tag3}
										onChange={e => setTag3(e.currentTarget.value)}
									/>
									<div className="tag-list"></div>
								</fieldset>
								<button
									className="btn btn-lg pull-xs-right btn-primary"
									type="submit"
								>
									글 저장
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newarticle;
