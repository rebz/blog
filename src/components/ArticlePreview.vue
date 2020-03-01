<template>
	<article class="ArticlePreview" :key="post.id">
		<g-link :to="post.path">

			<div class="ArticlePreview__date">
				{{ post.date | date }}
			</div>

			<h1>
				{{ post.title }}
			</h1>

			<p>
				{{ post.excerpt }}
			</p>

			<div class="ArticlePreview__meta">

				<div class="ArticlePreview__tags">
					<span v-for="tag in post.tags">
						{{ tag.title }}
					</span>
				</div>

			</div>

		</g-link>
	</article>
</template>

<script>
	import { Datetime } from '@/utils/Datetime'

	export default {
		props: {
			post: {
				type: Object,
				required: true,
				default: undefined
			}
		},
		filters: {
			date: Datetime.format
		},
		data: () => ({
			Datetime
		})
	}
</script>
