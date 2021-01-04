module.exports = function ({ e, addUtilities, theme }) {
	colors = theme('colors');

	const utility = Object.keys(colors).reduce((acc, key) => {
		if (typeof colors[key] === 'string') {
			return {
				...acc,
				[`.decoration-${e(key)}`]: {
					'text-decoration-color': colors[key],
				},
			};
		}

		const variants = Object.keys(colors[key]);

		return {
			...acc,
			...variants.reduce(
				(a, variant) => ({
					...a,
					[`.decoration-${e(key)}-${variant}`]: {
						'text-decoration-color': colors[key][variant],
					},
				}),
				{}
			),
		};
	}, {});

	addUtilities(utility);
};
