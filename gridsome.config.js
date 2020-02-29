module.exports = {
	siteName: 'rebz.dev',
	siteUrl: 'https://rebz.dev',
	siteDescription: 'Some bits of code from a 10+ year ux engineer.',
	icon: 'src/assets/icons/favicon.png',
	plugins: [
		{
			use: '@gridsome/vue-remark',
			options: {
				typeName: 'Post',
				baseDir: './content/blog', // Where .md files are located
				route: '/blog/:title',
				template: './src/templates/Post.vue',
				refs: {
					tags: {
						typeName: 'Tag',
						create: true
					}
				}
			}
		},
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: process.env.GOOGLE_ANALYTICS,
				debug: {
					sendHitTask: process.env.NODE_ENV === 'production',
					enabled: process.env.NODE_ENV !== 'production'
				}
			}
		},
		// {
		// 	use: 'gridsome-plugin-rss',
		// 	options: {
		// 		contentTypeName: 'BlogPost',
		// 		feedOptions: {
		// 			title: 'My Awesome Blog',
		// 			feed_url: 'https://superblog.com/rss.xml',
		// 			site_url: 'https://superblog.com'
		// 		},
		// 		feedItemOptions: node => ({
		// 			title: node.title,
		// 			description: node.description,
		// 			url: 'https://superblog.com/post/' + node.slug,
		// 			author: node.fields.author
		// 		}),
		// 		output: {
		// 			dir: './static',
		// 			name: 'rss.xml'
		// 		}
		// 	}
		// },
		// {
		// 	use: 'gridsome-plugin-pwa',
		// 	options: {
		// 		title: 'Gridsome',
		// 		startUrl: '/',
		// 		display: 'standalone',
		// 		statusBarStyle: 'default',
		// 		manifestPath: 'manifest.json',
		// 		disableServiceWorker: true,
		// 		serviceWorkerPath: 'service-worker.js',
		// 		cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
		// 		shortName: 'Gridsome',
		// 		themeColor: '#666600',
		// 		backgroundColor: '#ffffff',
		// 		icon: '', // must be provided like 'src/favicon.png'
		// 		msTileImage: '',
		// 		msTileColor: '#666600'
		// 	}
		// }
	],
	templates: {
		Tag: '/tag/:id',
	}
}
