AvtqTimeTracker.LogEntry = SC.Record.extend({
  date: SC.Record.attr(SC.DateTime, {
    format: '%d.%m.%Y'
  }),
  amount: SC.Record.attr(Number),
  project: SC.Record.toOne('AvtqTimeTracker.Project', {
    isMaster: NO,
    inverse: 'project'
  }),
  description: SC.Record.attr(String)
});
