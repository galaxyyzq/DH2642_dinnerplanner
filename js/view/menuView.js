var MenuView = function (container, model) {

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
