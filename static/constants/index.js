const data = {
	menu: [
		{
			id: 'home',
			label: 'HOME',
			link: '/home',
			divider: false,
		},
		{
			id: 'solutions',
			label: 'SOLUTIONS',
			link: '/solutions',
			divider: false,
		},
		{
			id: 'media',
			label: 'MEDIA',
			link: '/media',
			divider: false,
		},
		{
			id: 'about',
			label: 'ABOUT',
			link: '/about',
			divider: true,
		},
	],
	page: {
		home: {
			title: 'The Catalyst of Industrial Operations',
			subtitle: 'We Simplify Operations Through Innovations in Physics and AI',
			description:
				'Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. Machinify radically simplifies and accelerates your ability to use AI to unlock the value in your data and deliver guaranteed ROI.',
			articles: [
				{
					id: 'home_article_1',
					group: null,
					title: 'That Actually Works.',
					description:
						'Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. Machinify radically simplifies and accelerates your ability to use AI to unlock the value in your data and deliver guaranteed ROI.',
					image: null,
					theme: 'light',
					layout: 'title',
				},
				{
					id: 'home_article_2',
					group: null,
					title: 'Read Our Story',
					description: null,
					link: '/about',
					image: null,
					theme: 'grey',
					layout: 'button',
				},
				{
					id: 'home_article_3',
					title: 'Go from raw data to production AI in minutes.',
					description:
						'Machinify’s ability to automate data collection, data transformation, AI creation and product deployment shrinks the time from from product idea to AI deployed into production from 6-9 months to a matter of minutes.Really.',
					image: '/static/images/earth-1.png',
					theme: 'dark',
					layout: 'left',
				},
				{
					id: 'home_article_4',
					title: 'Unleash AI across your about.',
					description:
						'Machinify makes AI accessible to domain experts and analysts in all parts of your organization.  Collaboration and change management tools enable your entire enterprise to benefit from each team’s insights and advances.',
					image: '/static/images/earth-2.png',
					theme: 'dark',
					layout: 'right',
				},
				{
					id: 'home_article_5',
					title: 'AI built for you, controlled by you.',
					description:
						'Create lasting competitive advantage by unlocking the value in your own proprietary data.  Our partnership model gives you full control of mission critical products andprocesses.',
					image: '/static/images/earth-3.png',
					theme: 'dark',
					layout: 'left',
				},
				{
					id: 'home_article_6',
					title: 'Immediate ROI',
					description:
						'Avoid expensive and time-consuming startup efforts. Machinify enables to you deploy AI-driven products quickly and start generating ROI right away.',
					image: '/static/images/earth-4.png',
					theme: 'dark',
					layout: 'right',
				},
				{
					id: 'home_article_7',
					group: null,
					title: 'The Machinify System',
					description:
						'We’ve integrated the power of intelligent automation, intuitive controls and cluster computing into a complete system comprised of three elements:',
					image: null,
					theme: 'light',
					layout: 'title',
				},
				{
					id: 'home_article_8',
					group: 'AI Cloud',
					title: 'Adaptive data infra built specifically for AI.',
					description:
						'The first data cloud built specifically for the rigors developing AI models, the Machinify AI Cloud accepts and efficiently stores all common data types with zeroconfiguration.',
					image: '/static/images/earth-1.png',
					theme: 'light',
					layout: 'left',
				},
				{
					id: 'home_article_9',
					group: 'AI Studio',
					title: 'Build models with zero scripting or coding.',
					description:
						'Create all data transformations, build AI models by creating formulas in an intuitive user interface.  Tedious scripting is a thing of thepast.',
					image: '/static/images/earth-2.png',
					theme: 'light',
					layout: 'right',
				},
				{
					id: 'home_article_10',
					group: 'AI Runtime',
					title: 'Deploy to production in an instant',
					description:
						'With a single click, Machinify automatically generates a production version of your AI model. Our simple yet powerful API efficiently returns predictions inmilliseconds.',
					image: '/static/images/earth-3.png',
					theme: 'light',
					layout: 'left',
				},
				{
					id: 'home_article_11',
					group: null,
					title: 'Learn More',
					description: null,
					link: '/media',
					image: null,
					theme: 'light',
					layout: 'button',
				},
				{
					id: 'home_article_12',
					group: null,
					title: 'Our Team',
					description:
						'From the outset, we’ve sought to build Machinify into a customer-first about that solves real problems and delivers real results.  Each member of our team reflects that commitment. We’ve brought together leaders in the fields of software development, machine learning, data science and business.',
					image: null,
					theme: 'grey',
					layout: 'title',
				},
				{
					id: 'home_article_13',
					group: null,
					title: 'Meet The about Team',
					description: null,
					link: '/features',
					image: null,
					theme: 'grey',
					layout: 'button',
				},
			],
		},
		features: {
			title: 'Organize Your Data',
			description:
				'Some long subtitle text goes here. It would be a tagline that describes the value of the software',
			articles: [
				{
					id: 'home_article_1',
					group: null,
					title: 'Features Page Works.',
					description:
						'Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. Machinify radically simplifies and accelerates your ability to use AI to unlock the value in your data and deliver guaranteed ROI.',
					image: null,
					theme: 'light',
					layout: 'title',
				},
				{
					id: 'home_article_2',
					group: null,
					title: 'Read Our Story',
					description: null,
					link: '/about',
					image: null,
					theme: 'grey',
					layout: 'button',
				},
				{
					id: 'home_article_3',
					title: 'Go from raw data to productionized AI minutes.',
					description:
						'Machinify’s ability to automate data collection, data transformation, AI creation and product deployment shrinks the time from from product idea to AI deployed into production from 6-9 months to a matter of minutes.Really.',
					image: '/static/images/earth-1.png',
					theme: 'dark',
					layout: 'left',
				},
				{
					id: 'home_article_4',
					title: 'Unleash AI across your about.',
					description:
						'Machinify makes AI accessible to domain experts and analysts in all parts of your organization.  Collaboration and change management tools enable your entire enterprise to benefit from each team’s insights andadvances.',
					image: '/static/images/earth-2.png',
					theme: 'dark',
					layout: 'right',
				},
				{
					id: 'home_article_5',
					title: 'AI built for you, controlled by you.',
					description:
						'Create lasting competitive advantage by unlocking the value in your own proprietary data.  Our partnership model gives you full control of mission critical products andprocesses.',
					image: '/static/images/earth-3.png',
					theme: 'dark',
					layout: 'left',
				},
				{
					id: 'home_article_6',
					title: 'Immediate ROI',
					description:
						'Avoid expensive and time-consuming startup efforts. Machinify enables to you deploy AI-driven products quickly and start generating ROI right away.',
					image: '/static/images/earth-4.png',
					theme: 'dark',
					layout: 'right',
				},
				{
					id: 'home_article_7',
					group: null,
					title: 'The Machinify System',
					description:
						'We’ve integrated the power of intelligent automation, intuitive controls and cluster computing into a complete system comprised of three elements:',
					image: null,
					theme: 'light',
					layout: 'title',
				},
				{
					id: 'home_article_8',
					group: 'AI Cloud',
					title: 'Adaptive data infra built specifically for AI.',
					description:
						'The first data cloud built specifically for the rigors developing AI models, the Machinify AI Cloud accepts and efficiently stores all common data types with zeroconfiguration.',
					image: '/static/images/earth-1.png',
					theme: 'light',
					layout: 'left',
				},
				{
					id: 'home_article_9',
					group: 'AI Studio',
					title: 'Build models with zero scripting or coding.',
					description:
						'Create all data transformations, build AI models by creating formulas in an intuitive user interface.  Tedious scripting is a thing of thepast.',
					image: '/static/images/earth-2.png',
					theme: 'light',
					layout: 'right',
				},
				{
					id: 'home_article_10',
					group: 'AI Runtime',
					title: 'Deploy to production in an instant',
					description:
						'With a single click, Machinify automatically generates a production version of your AI model. Our simple yet powerful API efficiently returns predictions inmilliseconds.',
					image: '/static/images/earth-3.png',
					theme: 'light',
					layout: 'left',
				},
				{
					id: 'home_article_11',
					group: null,
					title: 'Learn More',
					description: null,
					link: '/about',
					image: null,
					theme: 'light',
					layout: 'button',
				},
				{
					id: 'home_article_12',
					group: null,
					title: 'Our Team',
					description:
						'From the outset, we’ve sought to build Machinify into a customer-first about that solves real problems and delivers real results.  Each member of our team reflects that commitment. We’ve brought together leaders in the fields of software development, machine learning, data science and business.',
					image: null,
					theme: 'grey',
					layout: 'title',
				},
				{
					id: 'home_article_13',
					group: null,
					title: 'Meet The about Team',
					description: null,
					link: '/about',
					image: null,
					theme: 'grey',
					layout: 'button',
				},
			],
		},
		media: {
			title: 'This Is The Media Page',
			description: 'Through Innovations in Media',
			articles: [
				{
					id: 'media_article_1',
					group: 'event',
					title:
						'This is a long title for a short announcement style article. This title may be as long as this example tigle.',
					description: null,
					link: '/post',
					image:
						'https://wallpapertag.com/wallpaper/middle/9/f/c/287310-best-sci-fi-wallpaper-1920x1080.jpg',
					theme: 'dark',
					layout: 'tile',
					content: {
						title: 'The Title of The Article Goes Here',
						date: '2018-02-14',
						location: {
							city: 'City',
							state: 'State',
						},
						sections: [
							{
								id: 'media_article_1_section_1',
								title: null, // Can be left, right, or center. Default is left. Field is optional
								paragraphs: [
									{
										id: 'media_article_1_section_1_paragraph_1',
										align: 'left', // Can be left, right, or center. Default is left. Field is optional
										style: ['regular'], // Can be regular, italic, and/or bold. Default is ["regular"].
										test:
											'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.',
									},
									{
										id: 'media_article_1_section_1_paragraph_2',
										align: 'left', // Can be left, right, or center. Default is left. Field is optional
										style: ['regular'], // Can be regular, italic, and/or bold. Default is ["regular"].
										test:
											'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.',
									},
								],
							},
							{
								title: 'Some Section Title',
								paragraphs: [
									{
										id: 'media_article_1_section_1_paragraph_1',
										align: 'left', // Can be left, right, or center. Default is left. Field is optional
										style: ['regular'], // Can be regular, italic, and/or bold. Default is ["regular"].
										test:
											'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.',
									},
								],
							},
						],
					},
				},
				{
					id: 'media_article_2',
					group: 'announcement',
					title:
						'This is a long title for a short announcement style article. This title may be as long as this example tigle.',
					description: null,
					link: '/post',
					image:
						'https://i.pinimg.com/originals/18/5b/ae/185bae1d3a6d1b43ec74e2254b428e9a.jpg',
					theme: 'dark',
					layout: 'tile',
					content: {
						title: 'The Title of The Article Goes Here',
						date: '2018-02-14',
						location: {
							city: 'Atlanta',
							state: 'GA',
						},
						sections: [
							{
								id: 'media_article_1_section_1',
								title: null, // Can be left, right, or center. Default is left. Field is optional
								paragraphs: [
									{
										id: 'media_article_1_section_1_paragraph_1',
										align: 'left', // Can be left, right, or center. Default is left. Field is optional
										style: ['regular'], // Can be regular, italic, and/or bold. Default is ["regular"].
										test: 'lorem ipsuim...',
									},
									{
										id: 'media_article_1_section_1_paragraph_2',
										align: 'left', // Can be left, right, or center. Default is left. Field is optional
										style: ['regular'], // Can be regular, italic, and/or bold. Default is ["regular"].
										test: 'lorem ipsuim...',
									},
								],
							},
							{
								title: 'Some Section Title',
								paragraphs: [],
							},
						],
					},
				},
				{
					id: 'media_article_3',
					group: 'event',
					title:
						'This is a long title for a short announcement style article. This title may be as long as this example tigle.',
					description: null,
					link: '/post',
					image:
						'https://i.pinimg.com/originals/09/76/07/097607e041f184bf72ef46281b834b99.jpg',
					theme: 'dark',
					layout: 'tile',
					content: {
						title: 'The Title of The Article Goes Here',
						date: '2018-02-14',
						location: {
							city: 'Houston',
							state: 'TX',
						},
						sections: [
							{
								id: 'media_article_3_section_1',
								title: 'Section Title 1 - Article 3', // Can be left, right, or center. Default is left. Field is optional
								paragraphs: [
									{
										id: 'media_article_3_section_1_paragraph_1',
										align: 'left', // Can be left, right, or center. Default is left. Field is optional
										style: ['regular'], // Can be regular, italic, and/or bold. Default is ["regular"].
										test:
											'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.',
									},
									{
										id: 'media_article_3_section_1_paragraph_2',
										align: 'left', // Can be left, right, or center. Default is left. Field is optional
										style: ['regular'], // Can be regular, italic, and/or bold. Default is ["regular"].
										test:
											'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.',
									},
								],
							},
							{
								title: 'Section Title 2 - Article 3',
								paragraphs: [
									{
										id: 'media_article_3_section_1_paragraph_1',
										align: 'left', // Can be left, right, or center. Default is left. Field is optional
										style: ['regular'], // Can be regular, italic, and/or bold. Default is ["regular"].
										test:
											'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.',
									},
								],
							},
						],
					},
				},
			],
		},
		about: {
			title: 'This Is The About Page',
			description: 'About Our Innovations ...',
			articles: [
				{
					id: 'home_article_1',
					group: null,
					title: 'About Page Actually Works.',
					description:
						'Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. Machinify radically simplifies and accelerates your ability to use AI to unlock the value in your data and deliver guaranteed ROI.',
					image: null,
					theme: 'light',
					layout: 'title',
				},
				{
					id: 'home_article_2',
					group: null,
					title: 'Read Our Story',
					description: null,
					link: '/about',
					image: null,
					theme: 'grey',
					layout: 'button',
				},
				{
					id: 'home_article_3',
					title: 'Go from raw data to productionized AI inminutes.',
					description:
						'Machinify’s ability to automate data collection, data transformation, AI creation and product deployment shrinks the time from from product idea to AI deployed into production from 6-9 months to a matter of minutes.Really.',
					image: '/static/images/earth-1.png',
					theme: 'dark',
					layout: 'left',
				},
				{
					id: 'home_article_4',
					title: 'Unleash AI across your about.',
					description:
						'Machinify makes AI accessible to domain experts and analysts in all parts of your organization.  Collaboration and change management tools enable your entire enterprise to benefit from each team’s insights andadvances.',
					image: '/static/images/earth-2.png',
					theme: 'dark',
					layout: 'right',
				},
				{
					id: 'home_article_5',
					title: 'AI built for you, controlled by you.',
					description:
						'Create lasting competitive advantage by unlocking the value in your own proprietary data.  Our partnership model gives you full control of mission critical products andprocesses.',
					image: '/static/images/earth-3.png',
					theme: 'dark',
					layout: 'left',
				},
				{
					id: 'home_article_6',
					title: 'Immediate ROI',
					description:
						'Avoid expensive and time-consuming startup efforts. Machinify enables to you deploy AI-driven products quickly and start generating ROI right away.',
					image: '/static/images/earth-4.png',
					theme: 'dark',
					layout: 'right',
				},
				{
					id: 'home_article_7',
					group: null,
					title: 'The Machinify System',
					description:
						'We’ve integrated the power of intelligent automation, intuitive controls and cluster computing into a complete system comprised of three elements:',
					image: null,
					theme: 'light',
					layout: 'title',
				},
				{
					id: 'home_article_8',
					group: 'AI Cloud',
					title: 'Adaptive data infra built specifically for AI.',
					description:
						'The first data cloud built specifically for the rigors developing AI models, the Machinify AI Cloud accepts and efficiently stores all common data types with zeroconfiguration.',
					image: '/static/images/earth-1.png',
					theme: 'light',
					layout: 'left',
				},
				{
					id: 'home_article_9',
					group: 'AI Studio',
					title: 'Build models with zero scripting or coding.',
					description:
						'Create all data transformations, build AI models by creating formulas in an intuitive user interface.  Tedious scripting is a thing of thepast.',
					image: '/static/images/earth-2.png',
					theme: 'light',
					layout: 'right',
				},
				{
					id: 'home_article_10',
					group: 'AI Runtime',
					title: 'Deploy to production in an instant',
					description:
						'With a single click, Machinify automatically generates a production version of your AI model. Our simple yet powerful API efficiently returns predictions inmilliseconds.',
					image: '/static/images/earth-3.png',
					theme: 'light',
					layout: 'left',
				},
				{
					id: 'home_article_11',
					group: null,
					title: 'Learn More',
					description: null,
					link: '/about',
					image: null,
					theme: 'light',
					layout: 'button',
				},
				{
					id: 'home_article_12',
					group: null,
					title: 'Our Team',
					description:
						'From the outset, we’ve sought to build Machinify into a customer-first about that solves real problems and delivers real results.  Each member of our team reflects that commitment. We’ve brought together leaders in the fields of software development, machine learning, data science and business.',
					image: null,
					theme: 'grey',
					layout: 'title',
				},
				{
					id: 'home_article_13',
					group: null,
					title: 'Meet The about Team',
					description: null,
					link: '/about',
					image: null,
					theme: 'grey',
					layout: 'button',
				},
			],
		},
	},
	outputs: [
		{ name: 'currentDate', label: 'Mon Jul 16 2018', fill: '53.9726%' },
		{ name: 'mouseX', label: 'mx 870', fill: '43.9726%' },
		{ name: 'mouseY', label: 'my 481', fill: '3.9726%' },
		{ name: 'mouseXVelocity', label: 'mxv 0', fill: '70 .9726%' },
		{ name: 'mouseYVelocity', label: 'myv 4', fill: '0.9726%' },
		{ name: 'cycles', label: 'cycles 240370', fill: '93.9726%' },
	],
	footer: {
		address: '165 University Avenue, Palo Alto, CA 94301',
		email: 'info@about.com',
	},
};

export default data;
