var MenuView = function (container, model) {

	var menu = container.find("#menu");
	var totalCost = container.find("#totalCost");
	var cost = 0.00;

	for (var i = model.getFullMenu().length - 1; i>= 0; i--) {
		var divRow = document.createElement('DIV');
		divRow.className = "row space";

		var divCol1 = document.createElement('DIV');
		divCol1.className = "col-xs-8";
		divCol1.innerHTML = model.getFullMenu()[i].name;

		var divCol2 = document.createElement('DIV');
		divCol2.className = "col-xs-4 right";
		var price = 0;

		for(key in model.getFullMenu()[i].ingredients){
				//We add to the price price*quantity of the ingredient
				price += model.getFullMenu()[i].ingredients[key].price * model.getFullMenu()[i].ingredients[key].quantity;
		}
		
		cost += price;

		divCol2.innerHTML = price;

		divRow.appendChild(divCol1);
		divRow.appendChild(divCol2);

		menu.prepend(divRow);
	}
	totalCost.html(cost);

}