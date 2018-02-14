var GuestNumberView = function (container, model) {

	var plusButton=this.plusButton = container.find(".plusGuest");
	var minusButton=this.minusButton = container.find(".minusGuest");

	var loadGuestNumberView = function(){
		var numberOfGuests = container.find(".numberOfGuests");
		numberOfGuests.html(model.getNumberOfGuests);
	}

	this.update = function() {
		loadGuestNumberView();
	}
	model.addObserver(this);
	loadGuestNumberView();

}
