import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    // attributify: true,       // CSS-in-JS style
    extract: {
        include: [
            './src/**/*.{jsx,tsx}'
        ],
    },
    theme: {
        extend: {}
    },
    transformCSS: 'pre',
    plugins: [formsPlugin],
})