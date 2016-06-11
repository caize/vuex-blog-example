import template from './articles.jade'
import './articles.css'
import '../directives/dateTime'

export default {
	template: template(),
	props: ['articles'],
	methods: {
		showArticle(id) {
			this.$route.router.go({ name: 'article', params: { id: id }});
		},
		editArticle(id) {
			this.$route.router.go({ name: 'edit', params: { id: id }});
		}
	}
}