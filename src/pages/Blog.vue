<template>
    <Layout>

		<h1>Blog</h1>
        <p>stuff</p>

		<hr />

		<article v-for="post in $page.posts.edges" :key="post.id">
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

    </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
		excerpt
        path
      }
    }
  }
}

</page-query>

<script>
export default {
    metaInfo: {
        title: "Blog"
    }
};
</script>
