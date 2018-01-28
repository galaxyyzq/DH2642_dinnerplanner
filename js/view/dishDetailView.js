var DishDetailView = function(container, model) {
	//How do we get id ?
	var dishDetail = container.find("#dishDetail");
	var name = container.find("#dishName");

	var title = document.createElement('h3');
	title.innerHTML = model.getDish(3).name;
	

	var img = document.createElement("img");
	var src = "images/" + model.getDish(3).image;
	img.setAttribute("src", src);

	var description = document.createElement("DIV");
	description.className = "space";
    description.innerHTML = model.getDish(3).description;

    dishDetail.prepend(description);
    dishDetail.prepend(img);


    var numberOfGuests = container.find("#numberOfGuests");
    numberOfGuests.html(model.getNumberOfGuests());

    var ingredients = container.find("#ingredients");

    var cost = container.find("#cost");
    var dishCost = 0;

    for(var i = 0; i < model.getDish(3).ingredients.length; i++){
    	var line = document.createElement('DIV');
    	line.className = "row space";

    	var quantity = document.createElement('DIV');
    	quantity.className = "col-xs-2";
    	quantity.innerHTML = (model.getDish(3).ingredients[i].quantity * model.getNumberOfGuests()) + model.getDish(3).ingredients[i].unit;

    	var ingredient = document.createElement('DIV');
    	ingredient.className = "col-xs-6";
    	ingredient.innerHTML = model.getDish(3).ingredients[i].name;

    	var sek = document.createElement('DIV');
    	sek.className = "col-xs-2";
    	sek.innerHTML = "SEK";

    	var price = document.createElement('DIV');
    	price.className = "col-xs-2 right";
    	var ingredientPrice = model.getDish(3).ingredients[i].price * model.getDish(3).ingredients[i].quantity * model.getNumberOfGuests() ;
    	price.innerHTML = ingredientPrice;
    	dishCost += ingredientPrice;

    	line.appendChild(quantity);
    	line.appendChild(ingredient);
    	line.appendChild(sek);
    	line.appendChild(price);

    	ingredients.append(line);
    } 

    cost.html(dishCost);

    var preparation = container.find("#preparation");
    preparation.html("Hello World !");

    name.prepend(title);

}