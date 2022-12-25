<template>
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in"> <component :is="slotProps.Component"> </component> </transition
	></router-view>
</template>
<script>
// import TheHeader from "@/components/TheHeader.vue";

export default {
	components: {},
};
</script>

<style lang="scss">
*,
*::after,
*::before {
	box-sizing: border-box;
}

html {
	@include font();
	--s: 30px;

	--_c: #0000, #fff 1deg 79deg, #0000 81deg;
	--g0: conic-gradient(from 140deg at 50% 87.5%, var(--_c));
	--g1: conic-gradient(from 140deg at 50% 81.25%, var(--_c));
	--g2: conic-gradient(from 140deg at 50% 75%, var(--_c));
	--g3: conic-gradient(at 10% 20%, #0000 75%, #fff 0);
	background: var(--g0) 0 calc(var(--s) / -4), var(--g0) var(--s) calc(3 * var(--s) / 4), var(--g1), var(--g1) var(--s) var(--s), var(--g2) 0 calc(var(--s) / 4), var(--g2) var(--s) calc(5 * var(--s) / 4), var(--g3) calc(var(--s) / -10) var(--s), var(--g3) calc(9 * var(--s) / 10) calc(2 * var(--s)), repeating-conic-gradient(from 45deg, #b5f4ff 0 25%, #bbccf3 0 50%);
	background-size: calc(2 * var(--s)) calc(2 * var(--s));
}

body {
	@include font(1.6rem, 2rem, 400);
	font-family: $font;
	color: $bright;
	min-width: 320px;
	margin: 0 auto;
	overflow-x: hidden;
	overflow-y: scroll;
	max-height: 100vh;
}

img {
	min-width: 100%;
	height: auto;
	display: block;
}

.container {
	max-width: 1400px;
	margin: 0 auto;
	padding: 0 40px;

	@media (max-width: $mobile) {
		padding: 0 20px;
	}
}

.button {
	padding: 10px 25px;
	text-align: center;
	outline: none;
	border-radius: 8px;
	border: none;
	background-color: $dark;
	color: $white;
	cursor: pointer;
	transition: $tr;

	&:hover {
		background-color: lighten($dark, 10%);
	}
}

main {
	flex-grow: 1;
}
</style>
