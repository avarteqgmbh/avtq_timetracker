// ==========================================================================
// Project:   AvtqTimetracker - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/* globals AvtqTimetracker */

// This page describes the main user interface for your application.  
AvtqTimetracker.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'captureLogSplitView'.w(),

    captureLogSplitView: SC.SplitView.design({
			topLeftView: AvtqTimetracker.TimeCaptureView.design({
				
			}), 
			bottomRightView: SC.LabelView.design({
				textAlign: SC.ALIGN_CENTER,
				tagName: "h1", 
				value: "Welcome to SproutCore!"
			}),
			layoutDirection: SC.LAYOUT_VERTICAL
		}),


  })
});
