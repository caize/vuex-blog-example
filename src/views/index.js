"use strict";

import template from './index.jade'
import articles from '../components/articles.js'
import store from '../vuex/store.js'
import { getAllArticles } from '../vuex/actions.js'

export default {
	store,
	template: template(),
	vuex: {
		getters: {
			articles: state => state.articles
		},
		actions: {
			getAllArticles
		}
	},
	created() {
		this.getAllArticles();
	},
	components: {
		'my-articles': articles
	}
}