var ExampleView2 = function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests2");

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	numberOfGuests.html(model.getNumberOfGuests());
	
}
 
