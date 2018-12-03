const URL = 'http://localhost:3030'
const VERSION = '/api/v1'
const ADMIN = '/admin'

export default {
	auth: {
		login: `${URL}${VERSION}${ADMIN}/tasks`,
	},
	blog: {
		getAll: `${URL}${VERSION}${ADMIN}/tasks`,
		add: `${URL}${VERSION}${ADMIN}/tasks`,
		edit: `${URL}${VERSION}${ADMIN}/tasks`,
	},
}
