module.exports = {
	extends: 'airbnb',
	plugins: ['react', 'jsx-a11y', 'import'],
	rules: {
		'react/jsx-filename-extension': 0,
		'no-use-before-define': 0,
		'import/newline-after-import': 'off',
		'comma-dangle': ['error', 'always']
	}
};
