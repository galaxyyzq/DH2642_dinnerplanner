var DishView = function (container, model) {

var dishes = container.find("#dish");

	var loadDishView = function(){

		dishes.html("");

		var div = document.createElement('DIV');

		for(i = 0; i < model.getSelectedDish('starter').length; i++){
			var col = document.createElement('DIV');
			col.className = "col-sm-4";

			var thumbnail = document.createElement('DIV');
			thumbnail.className = "thumbnail";
			var img = document.createElement('img');
			img.className = "dishpic";
			var src = "images/" + model.getSelectedDish('starter')[i].image;
			img.setAttribute("src", src);

			var divD = document.createElement('DIV');
			divD.className = "dish";
			divD.appendChild(img);

			var name = document.createElement('DIV');
			name.className = "caption text-center";
			var h4name = document.createElement('H4');
			h4name.innerHTML = model.getSelectedDish('starter')[i].name;
			name.appendChild(h4name);

			divD.appendChild(name);

			var btn = document.createElement('DIV');
			btn.innerHTML = "<p><a href='#' class='btn btn-defult addbutton' role='button'>Add</a> </p>";
			divD.appendChild(btn);

			thumbnail.appendChild(divD);
			col.appendChild(thumbnail);
			div.appendChild(col);
		}

		dishes.append(div);
	}
	//End loadDishView function


	this.update = function() {
		loadDishView();
	}
	model.addObserver(this);
	loadDishView();

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
