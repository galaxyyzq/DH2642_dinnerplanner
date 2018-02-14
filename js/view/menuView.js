var MenuView = function (container, model) {


	var menu = container.find(".menutable");
	var totalCost = container.find(".totalcost");
	var guestnumbervalue = model.getNumberOfGuests();

	this.hide = function(){
		container.hide();
	}

    this.show = function(){
		container.show();
	}

	var loadMenuView = function (){

		menu.html("");

		var dishprice=[];
		var totalcost2=0;

		for (var i=0; i < model.getFullMenu().length; i++) {
			/* create table like this:
			<tr>
			<td>dishname</td>
			<td>cost</td>
			</tr>
			*/
			dishprice[i]=0;

			var dishrow = document.createElement("tr");

			var dishname = document.createElement("td");
			dishname.innerHTML = model.getFullMenu()[i].name;

			//calculate price of dish[i]
			for(var j = 0; j < model.getFullMenu()[i].ingredients.length; j++){
				dishprice[i] += model.getFullMenu()[i].ingredients[j].price * model.getNumberOfGuests();
			}

			totalcost2=totalcost2+dishprice[i];

			var cost = document.createElement("td");
			cost.innerHTML = dishprice[i];

			dishrow.appendChild(dishname);
			dishrow.appendChild(cost);
			menu.append(dishrow);
		}

		totalCost.html(totalcost2);
	}
	// End loadMenuView function


	this.update = function() {
		loadMenuView();
	}
	model.addObserver(this);
	loadMenuView();

}
