<template>
	<div>
		<p>{{ greeting }} {{ target }}!</p>
		<p><button v-on:click="reverseMessage">Reverse Message</button></p>
	</div>
</template>

<script>
	module.exports = {
		props: ["who"],
		methods: {
			reverseMessage: function() {
				// console.log(this)
				this.$store.dispatch("reverseGreeting")
			}
		},
		computed: {
			target: function() {
				return this.who !== undefined ? this.who : "World"
			},
			greeting() {
				return this.$store.getters.getGreeting
			}
		}
	}
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	}
</style>
