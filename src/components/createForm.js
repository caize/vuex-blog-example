import template from './createForm.jade'
import './createForm.css'
import { getArticleById, addArticle, editArticle } from '../vuex/actions.js'

export default {
	template: template(),
	props: ['editing'],
	vuex: {
		getters: {
			article: state => state.article
		},
		actions: {
			getArticleById,
			addArticle,
			editArticle
		}
	},
	created() {
		const id = this.$route.params.id;
		this.getArticleById(id);
	},
	methods: {
		create() {
			this.addArticle(this.article)
				.then((article) => {
					this.$route.router.go({ name: 'article', params: { id: article.id }});
				});
		},
		edit() {
			this.editArticle(this.article)
				.then(() => {
					this.$route.router.go({ name: 'article', params: { id: this.article.id }});
				});
		}
	}
}