AvtqTimeTracker.LogEntry = SC.Record.extend({
	amount: SC.Record.attr(Number),
	project: SC.Record.toOne('AvtqTimeTracker.Project', { isMaster: NO, inverse: 'project' }),
	description: SC.Record.attr(String)
});