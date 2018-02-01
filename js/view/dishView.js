var DishView = function (container, model) {
		var dishes = container.find("#dish");
	    var div = document.createElement('DIV');

	    for(i = 0; i < model.getFullMenu().length; i++){
	    	var col = document.createElement('DIV');
	    	col.className = "col-sm-4";

	    	var thumbnail = document.createElement('DIV');
	    	thumbnail.className = "thumbnail";
	    	var img = document.createElement('img');
	    	img.className = "dishpic";
	    	var src = "images/" + model.getFullMenu()[i].image;
		    img.setAttribute("src", src);

		    var divD = document.createElement('DIV');
		    divD.className = "dish";
		    divD.appendChild(img);
		
		    var name = document.createElement('DIV');
		    name.className = "caption text-center";
		    var h4name = document.createElement('H4');
		    h4name.innerHTML = model.getFullMenu()[i].name;
		    name.appendChild(h4name);


		  //  innerHTML = "<p><a href='#' class='btn btn-defult' role='button'>Add</a> </p>";
		  // lack of a button
		    divD.appendChild(name);

		    thumbnail.appendChild(divD);
            col.appendChild(thumbnail);
	    	div.appendChild(col);
	    }

	    //origin HTML
	    //<div class="col-sm-4">
		//				<div class="thumbnail">
      	//					<img src="images/meatballs.jpg" class="dishpic">
      	//					<div class="caption text-center">
        //						<h4>Meatballs</h4>
        //						<p><a href="#" class="btn btn-defult" role="button">Add</a> </p>
      	//					</div>
    	//				</div>
    	//			</div>

	dishes.append(div);	
}