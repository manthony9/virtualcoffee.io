module.exports = {
	// github username: required
	github: 'mccurcio',
	//
	// everything below here is optional. by default, we pull most profile data from your github profile.
	// you can override that data here, as well as provide some additional account links below
	//
	// name - if not defined here, will default to your Name on github if defined, if not, then your username
	name: 'Matthew Curcio',
	//
	// mainUrl: the url your name links to on the members page. defaults to your github profile
	// mainUrl: 'https://virtualcoffee.io',
	//
	// bio - accepts markdown.
	bio: `Scientist, Biochemist & Educator`,
	//
	// can take  one of each type except website - you can add as many `website` accounts as you wish
	accounts: [
		{ type: 'linkedin', username: 'mattcurcio' },
		{ type: 'dev', username: 'mccurcio' },
		{ type: 'codenewbie', username: 'mccurcio' },
		{ type: 'twitter', username: '@oaxacamatt1' },
		// { type: 'twitch', username: 'yourUserName' },
		// { type: 'youtube', channelId: 'yourChannelId' }, // or { type: 'youtube', customUrl: 'https://www.youtube.com/c/yourCustomUrl' }
		// { type: 'polywork', username: 'yourUserName' },
		// { type: 'medium', username: 'yourUserName' },
		// { type: 'hashnode', username: 'yourUserName' },
		{
			type: 'website',
			url: 'https://github.com/mccurcio',
			title: 'Matthew Curcio',
		},
	],
};
