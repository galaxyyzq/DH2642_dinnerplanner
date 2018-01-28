var FinalMenuView = function(container, model) {
	var finalMenu = container.find("#finalMenu");
	var totalCost = container.find("#totalCost");

	var div = document.createElement('div');
	div.className ="ol-md-12 dishoverview";

	var totalCost = 0;

	for(var i = 0; i < model.getFullMenu().length; i++){

		var element = document.createElement('DIV');
		element.className = "thumbnail";
		element.style = "margin: 0 10px 0 10px"

		var cost = 0;

		var divName = document.createElement('DIV');
		divName.className ="name";
		divName.innerHTML = model.getFullMenu()[i].name;
		var img = document.createElement('img');
		var src = "images/" + model.getFullMenu()[i].image;
		img.setAttribute("src", src);
		img.className = "dishpic"
		img.style = "margin: 0 10px 0 10px"
		var divDish = document.createElement('DIV');
		divDish.className = "dish";
		divDish.appendChild(img);
		divDish.appendChild(divName);

		// <div class="col-md-12 dishoverview" >
        //<div class="thumbnail" style="margin: 0 10px 0 10px">
        //      <img src="images/meatballs.jpg" class="dishpic">
        //     <div class="caption text-center">
        //            <h4>Meatballs</h4>
        //            <p>20 SEK</p>
        //      </div>
        //</div>

		element.appendChild(divDish);

		for(var j = 0; j < model.getFullMenu()[i].ingredients.length; j++){
			cost += model.getFullMenu()[i].ingredients[j].price * model.getFullMenu()[i].ingredients[j].quantity * model.getNumberOfGuests();
		}

		totalCost += cost;

		divCost = document.createElement('H4');
		divCost.innerHTML = cost + " SEK";

		element.appendChild(divCost);
		div.appendChild(element);
	}

	//    <div class="col-md-12 text-center" style="padding: 20px 0 20px 0">
    //  <div style="margin: 0 20px 0 20px">
    //        <h3>Total</h3>
    //        <p>90 SEK</p>
    //  </div>
	
	var costElt = document.createElement('DIV');
	costElt.className = "col-md-12 text-center";
	var cost = document.createElement('H3');
	cost.className = "center";
	cost.innerHTML = "Total： " + totalCost + " SEK";
	costElt.appendChild(cost);

	div.appendChild(costElt);
	finalMenu.append(div);
}