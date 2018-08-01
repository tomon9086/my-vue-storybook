const Vue = require("vue").default
const Vuex = require("vuex").default

const storiesOf = require("@storybook/vue").storiesOf

const Hello = require("./Hello.vue").default

Vue.component("Hello", Hello)

storiesOf("Hello.vue", module)
	.add("reverse message; from vue tutorial", () => ({
		components: { Hello },
		template: "<Hello></Hello>",
		store: new Vuex.Store({
			state: {
				greeting: "Hello"
			},
			mutations: {
				reverseGreeting(state) {
					state.greeting = state.greeting.split("").reverse().join("")
				}
			},
			getters: {
				getGreeting(state) {
					return state.greeting
				}
			},
			actions: {
				reverseGreeting(state) {
					this.commit("reverseGreeting")
				}
			}
		})
	}))
