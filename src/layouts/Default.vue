<template>
    <div class="Layout">

		<div class="Layout__con">

			<header class="Header">

				<div class="Header__con">

					<rebz-logo />

					<!-- <nav class="Nav">
						<g-link class="NavItem" title="About Rebz and this site" to="/about/">About</g-link>
					</nav> -->

				</div>

			</header>

			<slot />

		</div>

		<footer class="Footer">
			<div class="Footer__con">
				<p>
					&copy; {{ copyrightDate }} all my love.
				</p>
			</div>
		</footer>

    </div>
</template>

<script>
	import RebzLogo from "@/components/RebzLogo.vue";

    export default {
        components: {
            RebzLogo
		},
		computed: {
			copyrightDate() {
				return new Date().getFullYear()
			}
		}
    };
</script>
