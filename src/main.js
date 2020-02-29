// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '@/assets/sass/site.scss'

import DefaultLayout from '@/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
	Vue.component('Layout', DefaultLayout)

	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Roboto:900'
	})
}
