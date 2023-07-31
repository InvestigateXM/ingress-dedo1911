import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      prerender: { entries: [] },
      fallback: "index.html"
    })
	}
}

export default config
