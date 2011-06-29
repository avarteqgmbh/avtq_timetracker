AvtqTimeTracker.LogEntriesTableView = SC.TableView.extend({
	backgroundColor: "white",
	layout: { border: 5, borderLeft: 10 },
	
	columns: [
		SC.TableColumn.create({
			key: 'amount',
			label: 'Amount',
			width: 50
		}),
		
		SC.TableColumn.create({
			key: 'project',
			label: 'Project',			
			width: 200
		}),
		
		SC.TableColumn.create({
			key: 'description',
			label: 'Description',
			width: 400
		}),
	],
	
	contentBinding: 'AvtqTimeTracker.logEntriesController.arrangedObjects',
	selectionBinding: 'AvtqTimeTracker.logEntriesController.selection',
	exampleView: SC.TableRowView,
	recordType: AvtqTimeTracker.LogEntry
});