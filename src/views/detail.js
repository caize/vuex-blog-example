import template from './detail.jade'
import article from '../components/article.js'
import store from '../vuex/store.js'

export default {
	store,
	template: template(),
	components: {
		'my-article': article
	}
}