module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb-base',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
				js: 'never',
				jsx: 'never',
			},
		],
		indent: [
			'error',
			'tab',
		],
		'linebreak-style': 'off',
		'no-restricted-syntax': [
			'error',
			'WithStatement',
		],
		'no-tabs': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: [
					'.ts',
					'.js',
				],
			},
		},
	},
};
