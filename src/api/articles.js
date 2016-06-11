"use strict";

const url = '/api/articles';

const ArticlesApi = {
	getAll() {
		return new Promise((resolve) => {
			$.ajax({
				type: 'GET',
				url: url
			}).done((data) => {
				resolve(data);
			}).fail(() => {
				console.log('fail');
			});
		});
	},
	getArticleById(id) {
		return new Promise((resolve) => {
			$.ajax({
				type: 'GET',
				url: url,
				data: {id: id}
			}).done((data) => {
				resolve(data);
			}).fail(() => {
				console.log('fail');
			});
		});
	},
	postArticle(article) {
		return new Promise((resolve) => {
			$.ajax({
				type: 'POST',
				url: url,
				data: article
			}).done((data) => {
				resolve(data);
			}).fail(() => {
				console.log('fail');
			});
		});
	},
	editArticle(article) {
		return new Promise((resolve) => {
			$.ajax({
				type: 'PUT',
				url: url,
				data: article
			}).done((data) => {
				resolve(data);
			}).fail(() => {
				console.log('fail');
			});
		});
	},
	deleteArticle(article) {
		return new Promise((resolve) => {
			$.ajax({
				type: 'DELETE',
				url: url,
				data: article
			}).done((data) => {
				resolve(data);
			}).fail(() => {
				console.log('fail');
			});
		});
	}
};

export default ArticlesApi;