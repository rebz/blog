<template>

    <Layout>

		<div class="Home__hero">
			<h1 class="Home__title">
				<span>Some bits</span>
				<span>of code.</span>
			</h1>
			<h2 class="Home__subtitle">
				Take it with a grain of UX.
			</h2>
		</div>

		<div class="Home__feed">
			<article-preview
				v-for="post in $static.posts.edges"
				:post="post.node"
				:key="`ap-${post.node.id}`"
			/>
		</div>

    </Layout>

</template>

<static-query>
query {
  posts: allPost {
    edges {
      node {
		id
        title
		excerpt
        path
		tags {
          id
          title
          path
        }
      }
    }
  }
}

</static-query>

<script>
	import ArticlePreview from '@/components/ArticlePreview.vue'

	export default {
		components: {
			ArticlePreview
		},
		metaInfo: {
			title: "Home"
		},
	};
</script>
