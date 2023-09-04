import axios from 'axios';

const kusitmsAxios = axios.create({
	baseURL: 'https://kusitms.shop',
});

const getGlobalArticles = () => kusitmsAxios.get('/api/v1/articles');
const getIdArticle = Id => kusitmsAxios.get(`/api/v1/articles/${Id}`);
const deleteIdArticle = Id => kusitmsAxios.delete(`/api/v1/articles/${Id}`);
const postArticle = data => kusitmsAxios.post('/api/v1/articles', data);

export {getIdArticle, deleteIdArticle, postArticle, getGlobalArticles};
