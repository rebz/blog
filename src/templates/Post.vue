<template>
    <Layout>
        <div class="Post">
            <h1>{{ $page.post.title }}</h1>
            <p class="intro">{{ $page.post.excerpt }}</p>

            <hr />

			<g-link
				:to="tag.path"
				v-for="tag in $page.post.tags"
				:key="tag.id"
				class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300">
				{{ tag.title }}<br>
				{{ tag.path }}
			</g-link>

            <hr />

            <VueRemarkContent />
        </div>
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
	post: post (path: $path) {
		title
		excerpt
		tags {
			title
		}
	}
}
</page-query>

<script>
export default {};
</script>
