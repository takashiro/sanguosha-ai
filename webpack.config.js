const path = require('path');

module.exports = function (env, argv) {
	const mode = (argv && argv.mode) || 'production';
	return {
		mode,
		target: 'node',
		entry: {
			index: './src/index.ts',
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: 'ts-loader',
				},
			],
		},
		resolve: {
			extensions: [
				'.ts',
			],
		},
		externals: [
			function (context, request, callback) {
				if (request.startsWith('.')) {
					callback();
				} else {
					callback(null, 'commonjs ' + request);
				}
			},
		],
		output: {
			filename: '[name].js',
			path: path.join(__dirname, 'dist'),
			libraryTarget: 'commonjs2',
			devtoolModuleFilenameTemplate: '[absolute-resource-path]',
		},
		devtool: mode !== 'production' ? 'source-map' : undefined,
	};
};
