import ArticlesApi from '../api/articles'
import * as types from './mutation-types'


export const getAllArticles = ({ dispatch }) => {
	ArticlesApi.getAll().then((articles) => {
		dispatch(types.RECEIVE_ALL, articles)
	});
};
export const getArticleById = ({ dispatch }, id) => {
	if(id) {
		ArticlesApi.getArticleById(id).then((article) => {
			dispatch(types.RECEIVE_ARTICLE, article)
		});
	}else {
		dispatch(types.RECEIVE_ARTICLE, {})
	}

};

export const addArticle = ({ dispatch }, article) => {
	return new Promise((resolve) => {
		ArticlesApi.postArticle(article)
		.then((article) => {
			resolve(article);
			dispatch(types.ADD_ARTICLE, article);
		});
	});
};
export const editArticle = ({ dispatch }, editArticle) => {
	return new Promise((resolve) => {
		ArticlesApi.editArticle(editArticle)
		.then(() => {
			resolve(editArticle);
			dispatch(types.EDIT_ARTICLE, editArticle);
		});
	});
};

export const deleteArticle = ({ dispatch }, article) => {
	return new Promise((resolve) => {
		ArticlesApi.deleteArticle(article)
		.then((articles) => {
			resolve();
			dispatch(types.DELETE_ARTICLE, articles);
		});
	});
};