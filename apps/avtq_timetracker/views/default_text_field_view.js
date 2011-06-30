AvtqTimeTracker.DefaultTextFieldView = SC.TextFieldView.extend({
	
	defaultValue: "Default",
	
	beginEditing: function(e) {			
		if (e.target.value === e.target.defaultValue) {
			e.target.value = "";
		} 
	},
	
	commitEditing: function(e) {
		if (e.target.value == "") {
			e.target.value = e.target.defaultValue;
		}
	},
	
	// Constructor
	init: function() {
		
		// You have to call sc_super!
		sc_super();
		this.value = this.defaultValue;
	}
});