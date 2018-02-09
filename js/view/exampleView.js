var ExampleView = function (container, model) {

	var plusButton=this.plusButton = container.find(".plusGuest");
	var minusButton=this.minusButton = container.find(".minusGuest");

	var loadExampleView = function(){
		var numberOfGuests = container.find(".numberOfGuests");
		numberOfGuests.html(model.getNumberOfGuests);
	}

	this.update = function() {
		loadExampleView();
	}
	model.addObserver(this);
	loadExampleView();

}


var ExampleViewController = function(view, model){

	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});
}
