<template>
	<div class="RecentBlogFeed">
		<div class="RecentBlogFeed__con">
		</div>
		<img src="https://placeimg.com/1280/720/any" />



		<article v-for="post in $static.posts.edges" :key="post.id">
			<h2>
				<g-link :to="post.node.path">
					{{ post.node.title }}
				</g-link>
			</h2>

			<p>
				{{ post.node.excerpt }}
			</p>

			<g-link :to="post.node.path">Read More</g-link>

		</article>


	</div>
</template>

<static-query>
query {
  posts: allPost {
    edges {
      node {
        title
		excerpt
        path
      }
    }
  }
}

</static-query>

<script>
	export default {

	}
</script>
