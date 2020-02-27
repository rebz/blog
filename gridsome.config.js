module.exports = {
	siteName: 'Gridsome',
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
				id: process.env.GOOGLE_ANALYTICS || undefined
			}
		}
	],
templates: {
	Tag: '/tag/:id',
	}
}
