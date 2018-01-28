var GuestView = function(container, model) {
	var numberOfGuests = container.find("#numberOfGuests");
	var numberOfGuests2 = container.find("#numberOfGuests2");
	var text = model.getNumberOfGuests() + " people";
	numberOfGuests.html(text);
	numberOfGuests2.html(text);
}