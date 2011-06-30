sc_require('views/default_text_field_view');

AvtqTimeTracker.TimeCaptureView = SC.View.extend({

	// backgroundColor: "#000000",
	layout: { heigth: 100, maxHeight: 100 },
	

	// projectView tagsView descriptionView
	childViews: 'durationView projectView descriptionView logItView'.w(),

	durationView: AvtqTimeTracker.DefaultTextFieldView.design({
		layout: { left: 15, top: 30, width: 50, height: 24 },
		defaultValue: "Time"		
	}),

	projectView: AvtqTimeTracker.DefaultTextFieldView.design({
		layout: { left: 70, top: 30, width: 125, height: 24 },
		defaultValue: "Project"
	}),

	descriptionView: AvtqTimeTracker.DefaultTextFieldView.design({
		layout: { left: 200, top: 30, width: 200, height: 24 },
		defaultValue: "Description"
	}),

	logItView: SC.ButtonView.design({
		layout: { left: 405, top: 30, width: 60, height: 24 },
		title: "Log It"
	})
})