"use strict";

import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex);

const state = {
	articles: [],
	article: {}
};

const mutations = {
	[types.RECEIVE_ALL] (state, articles) {
		state.articles = articles;
	},
	[types.RECEIVE_ARTICLE] (state, article) {
		state.article = article;
	},
	[types.ADD_ARTICLE] (state, article) {
		state.articles.push(article)
	},
	[types.DELETE_ARTICLE] (state, articles) {
		state.articles = articles;
	},
	[types.EDIT_ARTICLE] (state, editArticle) {
		state.article = Object.assign({}, state.article, editArticle);
	}
};

export default new Vuex.Store({
	state,
	mutations
})
