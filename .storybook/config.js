const configure = require("@storybook/vue").configure

const Vue = require("vue").default
const Vuex = require("vuex").default

Vue.use(Vuex)

function loadStories() {
	require("../src/stories")
}

configure(loadStories, module)
