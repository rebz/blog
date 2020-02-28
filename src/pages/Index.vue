<template>

    <Layout>

		<div class="Home__hero">
			<h1 class="Home__title"><span>Some bits</span><br><span>of code.</span></h1>
			<h2 class="Home__subtitle">
				...from a 10+ year ux engineer building random apps.
			</h2>
		</div>

		<recent-blog-feed />

    </Layout>

</template>

<script>
	import RecentBlogFeed from '@/components/RecentBlogFeed.vue'

	export default {
		components: {
			RecentBlogFeed
		},
		metaInfo: {
			title: "Home"
		}
	};
</script>
