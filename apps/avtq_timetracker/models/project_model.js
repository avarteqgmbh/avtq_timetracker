AvtqTimeTracker.Project = SC.Record.extend({
	name: SC.Record.attr(String),
	description: SC.Record.attr(String),
	logEntries: SC.Record.toMany(
		'AvtqTimeTracker.LogEntry'
	),
	
	toString: function() {
		return this.get('description');
	}.property('description')
});