<template>
    <div cass="Layout">

		<header class="Header">

			<rebz-logo />

            <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->

            <nav class="nav">
                <g-link class="nav__link" to="/">Home</g-link>
                <g-link class="nav__link" to="/blog/">Blog</g-link>
                <g-link class="nav__link" to="/about/">About</g-link>
            </nav>

        </header>

        <slot />

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
