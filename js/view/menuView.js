var MenuView = function (container, model) {

<<<<<<< HEAD
	var menu = document.getElementById("menutable");
	var dishprice=[];
	var totalcost2=0;

	for (var i=0; i < model.getFullMenu().length; i++) {
		/* create table like this:
		<tr>
			<td>dishname</td>
			<td>cost</td>
		</tr>
		*/

		var dishrow = document.createElement("tr");

		var dishname = document.createElement("td");
		dishname.innerHTML = model.getFullMenu()[i].name;

		//calculate price of dish[i]
		for(var j = 0; j < model.getFullMenu()[i].ingredients.length; j++){
			dishprice[i] = model.getFullMenu()[i].ingredients[j].price * model.getFullMenu()[i].ingredients[j].quantity * model.getNumberOfGuests();
=======
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
				price += model.getFullMenu()[i].ingredients[key].price;
>>>>>>> bc7a3f4cb0fb95a2035851a762a663aa2637e3dd
		}

		totalcost2=totalcost2+dishprice[i];

		var cost = document.createElement("td");
		cost.innerHTML = dishprice[i];

		menu.appendChild(dishrow);
		dishrow.appendChild(dishname);
		dishrow.appendChild(cost);
	}


	var totalCost = document.getElementById("totalcost");
	totalcost.innerHTML=totalcost2;

}
