sc_require('models/log_entry_model');

AvtqTimeTracker.LogEntry.FIXTURES = [
	{
		guid: 1,
		date: SC.DateTime.parse("01.01.2010", "%d.%m.%Y"),
		amount: 1,
		description: "Well, a lot of hard work.",
		project: 1
	},
	{
		guid: 2,
		date: SC.DateTime.parse("01.01.2010", "%d.%m.%Y"),
		amount: 10,
		description: "Another very hard task.",
		project: 2
	},
	{
		guid: 3,
		date: SC.DateTime.parse("01.01.2010", "%d.%m.%Y"),
		amount: 5,		
		description: "Serious stuff.",
		project: 2
	}
]