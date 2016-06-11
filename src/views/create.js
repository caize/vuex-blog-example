import template from './create.jade'
import createForm from '../components/createForm.js'
import store from '../vuex/store.js'

export default {
	store,
	template: template(),
	components: {
		'my-create-form': createForm
	}
}