// Use this file to override any of the settings that biotope-build uses
// You can find biotope-build's settings here: /node_modules/@biotope/build/config.js
// Examples of settings you can change:
// serve process port, turn off/on individual build-tasks, plugin settings, etc.

module.exports = {
	project: 'Biotope - The Frontend Ecosystem Framework',
	global: {
		tasks: {},
		externalResources: {
			'sanitize.css': 'sanitize.css',
			'@virtualidentity/css-helper': ['base.css'],
			handlebars: 'dist/handlebars.runtime.js',
		},
		tsEntryPoints: ['resources/ts/**/*.ts', 'components/**/*.ts'],
	},

	connect: {
		port: 9001,
	},

	webpack: {
		watchScss: true,
	},

	favicons: {
		appName: 'Brand New Bundestag',
		appShortName: 'Brand New Bundestag',
		background: '#f6f6f6',
		appleStatusBarStyle: "default",
		appDescription: 'Brand New Bundestag | Unabhängig & Überparteilich',
		lang: 'de',
		path: 'favicons/',
		display: 'browser',
		start_url: '/',
		orientation: 'any',
		logging: false,
		online: false,
		html: 'htmlhead.favicons.html',
		pipeHTML: true,
		replace: true,
		icons: {
			android: true,
			appleIcon: true,
			appleStartup: true,
			coast: true,
			favicons: true,
			firefox: true,
			windows: true,
		},
	},
};
