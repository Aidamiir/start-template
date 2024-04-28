import path from 'path'
import handlebars from 'vite-plugin-handlebars'
import liveReload from 'vite-plugin-live-reload'

export default {
	outDir: 'build',
	build: {
		rollupOptions: {
			input: {
				index: './index.html',
			},
		},
	},
	plugins: [
		handlebars({
			partialDirectory: path.resolve(__dirname, 'src/components'),
		}),
		liveReload('src/components/**/*.hbs'),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
}
