import Index from './views/index.js'
import Create from './views/create.js'
import Detail from './views/detail.js'
import Edit from './views/edit.js'

const routerMap = (router) => {
	router.map({
		'/': {
			component: Index
		},
		'/create': {
			component: Create
		},
		'/edit/:id': {
			name: 'edit',
			component: Edit
		},
		'/article/:id': {
			name: 'article',
			component: Detail
		}
	})
};

export default routerMap;