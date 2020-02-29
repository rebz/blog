<template>
	<article class="ArticlePreview" :key="post.id">
		<g-link :to="post.path">
			<!-- <g-image src="@/assets/content/images/white-tree.jpg" /> -->

			<h1 :class="Color.getRandomColor()">
				{{ post.title }}
			</h1>

			<p>
				{{ post.excerpt }}
			</p>

			<div class="ArticlePreview__tags">
				<span v-for="tag in post.tags">
					{{ tag.title }}
				</span>
			</div>

		</g-link>
	</article>
</template>

<script>
	import { Color } from '@/utils/Color'

	export default {
		props: {
			post: {
				type: Object,
				required: true,
				default: undefined
			}
		},
		data: () => ({
			Color
		})
	}
</script>
