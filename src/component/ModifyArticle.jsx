import React from 'react';
import {useState} from 'react';
import {putArticle} from '../remote/index';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {modifyState} from '../atoms/index';

const ModifyArticle = () => {
	const [article, setArticle] = useRecoilState(modifyState);

	const [title, setTitle] = useState(article.title);
	const [description, setDescription] = useState(article.description);
	const [body, setBody] = useState(article.body);
	const [tag1, setTag1] = useState(article.tagList[0] || '');
	const [tag2, setTag2] = useState(article.tagList[1] || '');
	const [tag3, setTag3] = useState(article.tagList[2] || '');

	const navigate = useNavigate();

	const submitArticle = e => {
		e.preventDefault();
		let tagList;
		if (tag1 === '') {
			tagList = ['STUDY'];
		} else if (tag2 === '') {
			tagList = [tag1];
		} else if (tag3 === '') {
			tagList = [tag1, tag2];
		} else {
			tagList = [tag1, tag2, tag3];
		}

		putArticle({title, description, body, tagList})
			.then(res => {
				navigate(`/article/${res.data.articleId}`);
			})
			.catch(err => {
				console.log(err);
				alert('태그는 STUDY ,HEALTH ,DRINK ,OTHER  가능합니다');
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
										placeholder="태그"
										value={tag1}
										onChange={e => setTag1(e.currentTarget.value)}
									/>
									<input
										type="text"
										className="form-control"
										placeholder="태그"
										value={tag2}
										onChange={e => setTag2(e.currentTarget.value)}
									/>
									<input
										type="text"
										className="form-control"
										placeholder="태그"
										value={tag3}
										onChange={e => setTag3(e.currentTarget.value)}
									/>
									<div className="tag-list"></div>
								</fieldset>
								<button
									className="btn btn-lg pull-xs-right btn-primary"
									type="submit"
								>
									글 수정
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModifyArticle;
