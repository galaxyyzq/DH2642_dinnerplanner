 var DishView = function (container, model) {
	
	var dishes = container.find("#dish");
	var div = document.createElement('DIV');
	var index = -1;

	for(var i = 0; i < model.getAllDishes("starter").length; i++){
		if (i%3 == 0){
			var row = document.createElement('DIV');
			row.className = "row space";
			div.appendChild(row);
			index += 1;
		}

		var column = document.createElement('DIV');
		column.className = "col-md-4";

		var divName = document.createElement('DIV');
		divName.className ="name";
		divName.innerHTML = model.getAllDishes("starter")[i].name;

		var img = document.createElement('img');
		var src = "images/" + model.getAllDishes("starter")[i].image;
		img.setAttribute("src", src);
		img.className = "dishpic"

		var divDish = document.createElement('DIV');
		divDish.className = "dish";
		divDish.appendChild(img);
		divDish.appendChild(divName);

		column.appendChild(divDish);
		div.children[index].appendChild(column);

	}
	
	dishes.append(div);
	
}