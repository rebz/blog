<template>
    <div class="Layout">

		<header class="Header">

			<rebz-logo />

            <nav class="Nav">
                <g-link class="NavItem" to="/blog/">Blog</g-link>
                <g-link class="NavItem" to="/about/">About</g-link>
            </nav>

        </header>

		<div class="Layout__con">

			<slot />

		</div>

    </div>
</template>

<script>
	import RebzLogo from "@/components/RebzLogo.vue";

    export default {
        components: {
            RebzLogo
        }
    };
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
