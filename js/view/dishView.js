var DishView = function (container, model) {

	//General State Function
	this.hide = function(){
		container.hide();
	}
	this.show = function(){
		container.show();
	}

	//Define variables
	var dishes = container.find("#dish");
	var parent = this;
	this.types="starter";


	//Construct View Function
	this.loadDishView = function(types){

		dishes.html("");

		var div = document.createElement('DIV');

		 type = types;

		 var detailbuttonListener =function(dishid){
			 loadDishDetailView()
		 }

		for(i = 0; i < model.getSelectedDish(type).length; i++){

			var col = document.createElement('DIV');
			col.className = "col-sm-4";

			var thumbnail = document.createElement('DIV');
			thumbnail.className = "thumbnail";
			var img = document.createElement('img');
			img.className = "dishpic";
			var src = "images/" + model.getSelectedDish(type)[i].image;
			img.setAttribute("src", src);

			var divD = document.createElement('DIV');
			divD.className = "dish text-center";
			divD.appendChild(img);

			var name = document.createElement('DIV');
			name.className = "caption text-center";
			var h4name = document.createElement('H4');
			h4name.innerHTML = model.getSelectedDish(type)[i].name;
			name.appendChild(h4name);

			divD.appendChild(name);



			var btn_detail = document.createElement('DIV');
			btn_detail.innerHTML = "<button href='#' class='btn btn-defult btn-sm' role='button'>Detail</button>";
			btn_detail.className = "detailbutton";

			btn_detail.className = model.getSelectedDish(type)[i].id;
			divD.appendChild(btn_detail);

			// var btn_add = document.createElement('DIV');
			// btn_add.innerHTML = "<button href='#' class='btn btn-info btn-sm' role='button'>+  Add</button>";
			// divD.appendChild(btn_add);

			thumbnail.appendChild(divD);
			col.appendChild(thumbnail);
			div.appendChild(col);
		}

		dishes.append(div);
	}
	//End loadDishView function


	this.update = function() {
		parent.loadDishView(parent.types);
	}
	model.addObserver(this);

	this.loadDishView(this.types);

}
