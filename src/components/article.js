import template from './article.jade'
import './article.css'
import { getArticleById, deleteArticle } from '../vuex/actions.js'

export default {
	template: template(),
	vuex: {
		getters: {
			article: state => state.article
		},
		actions: {
			getArticleById,
			deleteArticle
		}
	},
	created() {
		const id = this.$route.params.id;
		this.getArticleById(id);
	},
	methods: {
		removeArticle() {
			this.deleteArticle(this.article)
				.then(() => {
					this.$route.router.go({ path: '/'});
				});
		},
		editArticle(id) {
			this.$route.router.go({ name: 'edit', params: { id: id }});
		}
	}
}