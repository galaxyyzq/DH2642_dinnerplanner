var LastDishView = function(container, model) {

	//General State Function
	this.hide = function(){
		container.hide();
	}

	this.show = function(){
		container.show();
	}

	//Define variables
	var finalMenu = container.find("#finalMenu");
	var guestnumber = container.find(".numberOfGuests");
	var printbutton= this.printbutton = container.find("#printbutton");
	var backbutton= this.backbutton = container.find(".backbutton");

	//Construct View Function
	var loadLastDishView = function(){


		finalMenu.html("");
		guestnumber.html("");

		//Display guestnumber
		var guestnumbernode = document.createElement('span');
		var guestnumbervalue = model.getNumberOfGuests();
		guestnumber.append(guestnumbernode);
		guestnumbernode.innerHTML = guestnumbervalue;

		//display other content
		var div = document.createElement('DIV');
		div.className ="col-md-12 dishoverview";

		var totalCost = 0;
		var cost = 0;

		for(var i = 0; i < model.getFullMenu().length; i++){

			var col = document.createElement('DIV');
			col.className = "thumbnail";
			col.style = "margin: 0 10px 0 10px";


			var img = document.createElement('img');
			img.className = "dishpic";
			img.style = "margin: 0 10px 0 10px";
			var src = model.getFullMenu()[i].Image;
			img.setAttribute("src", src);
			col.appendChild(img);

			var divText = document.createElement('DIV');
			divText.className ="caption text-center";

			var divName = document.createElement('DIV');
			divName.innerHTML = model.getFullMenu()[i].Title;
			divText.appendChild(divName);

			// for(var j = 0; j < model.getFullMenu()[i].ingredients.length; j++){
			// 	cost += model.getFullMenu()[i].ingredients[j].price * model.getNumberOfGuests();
			// }
			cost = model.getFullMenu()[i].Price
			totalCost += cost;

			var divCost = document.createElement('H4');
			divCost.innerHTML = cost + " SEK";
			divText.appendChild(divCost);
			col.appendChild(divText);

			div.appendChild(col);

		}

		var costAll = document.createElement('DIV');
		costAll.className = "col-md-12 text-center";
		var costNumber = document.createElement('H3');
		costNumber.className = "center";
		costNumber.innerHTML = "Total： " + totalCost + " SEK";
		costAll.appendChild(costNumber);

		div.appendChild(costAll);

		finalMenu.append(div);
	}
	//End loadLastDishView function

	this.update = function() {
		loadLastDishView();
	}

	model.addObserver(this);

	loadLastDishView();

}

// original HTML
// <div class="col-md-12 dishoverview" >
//        <div class="thumbnail" style="margin: 0 10px 0 10px">
//              <img src="images/meatballs.jpg" class="dishpic">
//              <div class="caption text-center">
//                    <h4>Meatballs</h4>
//                    <p>20 SEK</p>
//              </div>
//        </div>
//        <div class="thumbnail" style="margin: 0 10px 0 10px">
//                  <img src="images/icecream.jpg" class="dishpic">
//                  <div class="caption text-center">
//                    <h4>Icecream</h4>
//                    <p>30 SEK</p>
//                </div>
//          </div>
//          <div class="thumbnail" style="margin: 0 10px 0 10px">
//                  <img src="images/sourdough.jpg" class="dishpic">
//                  <div class="caption text-center">
//                    <h4>Sourdough</h4>
//                    <p>30 SEK</p>
//                </div>
//          </div>
//    </div>
