// ==========================================================================
// Project:   AvtqTimeTracker - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/* globals AvtqTimeTracker */

// This page describes the main user interface for your application.  
AvtqTimeTracker.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'captureLogSplitView'.w(),

    captureLogSplitView: SC.SplitView.design({
      topLeftView: AvtqTimeTracker.TimeCaptureView.design({}),
    	bottomRightView: AvtqTimeTracker.LogEntriesTableView.design({}),

			defaultThickness: 100,
    	layoutDirection: SC.LAYOUT_VERTICAL
  	})
	})
});

SC.ready(function() {
	var logEntries = AvtqTimeTracker.store.find(AvtqTimeTracker.LogEntry);
	AvtqTimeTracker.logEntriesController.set('content', logEntries); 
});