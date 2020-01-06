const icons = {
	i11d: {
		defaultIcon: {
			iconName: '33',
			iconClass: 'i-thunder'
		},
		defaultCodes: [
			200, 201, 210, 211, 230, 231
		],
		altIcon: {
			iconName: '42',
			iconClass: 'i-thunderstorm'
		},
		altCodes: [
			202, 212, 221, 232
		],
	},
	i09d: {
		defaultIcon: {
			iconName: '34',
			iconClass: 'i-drizzle'
		},
		defaultCodes: [
			300, 301, 302, 310, 311, 500
		],
		altIcon: {
			iconName: '35',
			iconClass: 'i-rain'
		},
		altCodes: [
			312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531
		],
	},
	i09n: {
		parentCode: 'i09d'
	},
	i10d: {
		parentCode: 'i09d'
	},
	i10n: {
		parentCode: 'i09d'
	},
	i13d: {
		defaultIcon: {
			iconName: '38',
			iconClass: 'i-flake'
		},
		defaultCodes: [
			600, 601, 615, 616, 620
		],
		altIcon: {
			iconName: '39',
			iconClass: 'i-snow'
		},
		altCodes: [
			602, 611, 612, 621, 622
		],
	},

	i50d: {
		defaultIcon: {
			iconName: '13',
			iconClass: 'i-mist'
		},
		defaultCodes: [
			701, 711, 741
		],
		altIcon: {
			iconName: '5',
			iconClass: 'i-haze'
		},
		altCodes: [
			721, 751, 761, 762
		],

		i731: {
			iconName: '6',
			iconClass: 'i-whirls'
		},
		i771: {
			parentCode: '1731'
		},
		i781: {
			parentCode: '1731'
		},
	},
	i50n: {
		parentCode: 'i50d'
	},
	i01d: {
		defaultIcon: {
			iconName: '28',
			iconClass: 'i-clear-d'
		},
		defaultCodes: [
			800
		],
		altIcon: {},
		altCodes: [],
	},
	i01n: {
		defaultIcon: {
			iconName: '29',
			iconClass: 'i-clear-n'
		},
		defaultCodes: [
			800
		],
		altIcon: {},
		altCodes: [],
	},

	i02d: {
		defaultIcon: {
			iconName: '30',
			iconClass: 'i-cloud-d'
		},
		defaultCodes: [
			801, 802
		],
		altIcon: {
			iconName: '41',
			iconClass: 'i-cloudy'
		},
		altCodes: [
			813, 814
		],
	},
	i02n: {
		defaultIcon: {
			iconName: '31',
			iconClass: 'i-cloud-n'
		},
		defaultCodes: [
			801, 802
		],
		altIcon: {
			iconName: '31',
			iconClass: 'i-cloud-n'
		},
		altCodes: [],
	},

	i03d: {
		parentCode: 'i02d'
	},
	i03n: {
		parentCode: 'i02n'
	},

	i04d: {
		parentCode: 'i02d'
	},

	i04n: {
		parentCode: 'i02d'
	},

	i906: {
		iconName: '40',
		iconClass: 'i-hail'
	},

	i903: {
		iconName: '7',
		iconClass: 'i-cold'
	},

	i904: {
		iconName: '43',
		iconClass: 'i-hot'
	},

	wind: {
		iconName: '6',
		iconClass: 'i-wind'
	}
};

export default icons;