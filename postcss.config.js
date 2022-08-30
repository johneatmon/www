const postcssPresetEnv = require('postcss-preset-env');
const postcssJitProp = require('postcss-jit-props');
const OpenProps = require('open-props');

const lib = process.env.npm_lifecycle_event;

const inlineMediaQueries = lib === 'lib:media' || lib === 'lib:supports';
// todo: inline MQs for 'lib:all' when it's supported better

module.exports = {
	plugins: [
		postcssJitProp(OpenProps),
		postcssPresetEnv({
			stage: 1,
			features: {
				'custom-media-queries': { preserve: inlineMediaQueries },
			},
		}),
	],
};
