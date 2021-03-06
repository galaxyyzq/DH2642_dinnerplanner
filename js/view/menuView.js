var MenuView = function (container, model) {

	//General State Function
	this.hide = function(){
		container.hide();
	}

	this.show = function(){
		container.show();
	}

	//Define variables
	var menu = container.find(".menutable");
	var totalCost = container.find(".totalcost");
	var guestnumbervalue = model.getNumberOfGuests();

	//Construct View Function
	var loadMenuView = function (){

		menu.html("");

		var dishprice=[];
		var totalcost2=0;


		// console.log(model.getFullMenu());


		for (var i=0; i < model.getFullMenu().length; i++) {
			//console.log(model.getFullMenu().length);
			/* create table like this:
			<tr>
			<td>dishname</td>
			<td>cost</td>
			</tr>
			*/
			dishprice[i]=0;

			var dishrow = document.createElement("tr");

			var dishname = document.createElement("td");

			dishname.innerHTML = model.getFullMenu()[i].title;

			//calculate price of dish[i]
			// dishprice[i]=Math.floor(model.getFullMenu().extendedIngredients[i].amount * data.extendedIngredients[i].amount * model.getNumberOfGuests());
			for(var j = 0; j < model.getFullMenu()[i].extendedIngredients.length; j++){
				dishprice[i] += Math.floor(model.getFullMenu()[i].extendedIngredients[j].amount * 3 * model.getNumberOfGuests());
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


	this.update = function(change) {
		if(change == "numberOfGuests" || change == "menu"){
			loadMenuView();
		}
	}
	model.addObserver(this);
	loadMenuView();

}
