sc_require('models/log_entry_model');

AvtqTimeTracker.LogEntry.FIXTURES = [
	{
		guid: 1,
		amount: 1,
		description: "Well, a lot of hard work.",
		project: 1
	},
	{
		guid: 2,
		amount: 10,
		description: "Another very hard task.",
		project: 2
	},
	{
		guid: 3,
		amount: 5,
		description: "Serious stuff.",
		project: 2
	}
]