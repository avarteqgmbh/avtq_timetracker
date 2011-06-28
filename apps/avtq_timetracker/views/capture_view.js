AvtqTimetracker.TimeCaptureView = SC.View.extend({

	// projectView tagsView descriptionView
	childViews: 'durationView projectView descriptionView logItView'.w(),

	durationView: SC.TextFieldView.design({
		layout: { left: 15, top: 30, width: 50, height: 24 },
		value: "Time"
	}),

	projectView: SC.TextFieldView.design({
		layout: { left: 70, top: 30, width: 125, height: 24 },
		value: "Project"
	}),

	descriptionView: SC.TextFieldView.design({
		layout: { left: 200, top: 30, width: 200, height: 24 },
		value: "Description"
	}),

	logItView: SC.ButtonView.design({
		layout: { left: 405, top: 30, width: 60, height: 24 },
		title: "Log It"
	})
})