var FinalMenuView = function(container, model) {
	var finalMenu = container.find("#finalMenu");

	var div = document.createElement('div');
	div.className ="row space";

	var totalCost = 0;

	for(var i = 0; i < model.getFullMenu().length; i++){

		var element = document.createElement('DIV');
		element.className = "col-md-3";

		var cost = 0;

		var divName = document.createElement('DIV');
		divName.className ="name";
		divName.innerHTML = model.getFullMenu()[i].name;
		var img = document.createElement('img');
		var src = "images/" + model.getFullMenu()[i].image;
		img.setAttribute("src", src);
		var divDish = document.createElement('DIV');
		divDish.className = "dish";
		divDish.appendChild(img);
		divDish.appendChild(divName);

		element.appendChild(divDish);

		for(var j = 0; j < model.getFullMenu()[i].ingredients.length; j++){
			cost += model.getFullMenu()[i].ingredients[j].price * model.getFullMenu()[i].ingredients[j].quantity * model.getNumberOfGuests();
		}

		totalCost += cost;

		divCost = document.createElement('DIV');
		divCost.innerHTML = cost + " SEK";

		element.appendChild(divCost);
		div.appendChild(element);
	}
	
	var costElt = document.createElement('DIV');
	costElt.className = "col-md-3";
	var title = document.createElement('DIV');
	title.className = "center";
	title.innerHTML = "Total price :";
	var cost = document.createElement('DIV');
	cost.className = "center";
	cost.innerHTML = totalCost + " SEK";
	costElt.appendChild(title);
	costElt.appendChild(cost);

	div.appendChild(costElt);
	finalMenu.append(div);
}