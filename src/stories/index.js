import Vue from "vue"
import Vuex from "vuex"

import { storiesOf } from "@storybook/vue"

import Hello from "./Hello.vue"

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
