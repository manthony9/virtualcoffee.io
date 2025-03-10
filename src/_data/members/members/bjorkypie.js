module.exports = {
	// github username: required
	github: 'bjorkypie',
	//
	// everything below here is optional. by default, we pull most profile data from your github profile.
	// you can override that data here, as well as provide some additional account links below
	//
	// name - if not defined here, will default to your Name on github if defined, if not, then your username
	name: 'Madeline Hassett',
	//
	// mainUrl: the url your name links to on the members page. defaults to your github profile
	// mainUrl: 'https://virtualcoffee.io',
	//
	// bio - accepts markdown. Please keep your bio to a reasonable length, refer to
	// [members page](https://virtualcoffee.io/members/) for examples
	// bio: `This is _my_ **bio** and [here is a link](https://virtualcoffee.io)`,
	//
	// can take  one of each type except website - you can add as many `website` accounts as you wish
	accounts: [
		{ type: 'linkedin', username: 'madelinehassett' },
		// { type: 'dev', username: 'yourUserName' },
		// { type: 'codenewbie', username: 'yourUserName' },
		// { type: 'twitter', username: 'yourUserName' },
		// { type: 'twitch', username: 'yourUserName' },
		// { type: 'youtube', channelId: 'yourChannelId' }, // or { type: 'youtube', customUrl: 'https://www.youtube.com/c/yourCustomUrl' }
		{ type: 'polywork', username: 'madeline_h' },
		// { type: 'medium', username: 'yourUserName' },
		// { type: 'hashnode', username: 'yourUserName' },
		// { type: 'website', url: 'https://virtualcoffee.io', title: 'Title of link' },
	],
};
