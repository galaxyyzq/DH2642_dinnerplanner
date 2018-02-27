var DishView = function (container, model) {

	this.container=container;

	//General State Function
	this.hide = function(){
		container.hide();
	}
	this.show = function(){
		container.show();
	}

	//Define variables
	var dishes = container.find("#dish");
	var loading = container.find("#dishloading");
	var parent = this;
	this.types="main+course";
	this.searchnames ="";


	//Construct View Function
	this.loadDishView = function(types,searchnames){

		loading.show();


		dishes.html("");

		var div = document.createElement('DIV');

		type = types;
		// searchname= searchnames;

		model.getAllDishes(type, function(data){

			for(i = 0; i < data.results.length; i++){

				var title=data.results[i].title;
				var searchResult=title.indexOf(searchnames);

				if (searchResult>-1) {
					var col = document.createElement('DIV');
					col.className = "col-sm-3";
					col.style="padding:3px;"
					var thumbnail = document.createElement('DIV');
					thumbnail.className = "thumbnail";
					var img = document.createElement('img');
					img.className = "dishpic";
					var src = "https://spoonacular.com/recipeImages/"+data.results[i].imageUrls;
					img.setAttribute("src", src);

					var divD = document.createElement('DIV');
					divD.className = "dish text-center";
					divD.appendChild(img);

					var name = document.createElement('DIV');
					name.className = "caption text-center";
					var h4name = document.createElement('H4');
					h4name.innerHTML = data.results[i].title;
					name.appendChild(h4name);

					divD.appendChild(name);



					var btn_detail = document.createElement('DIV');
					btn_detail.innerHTML = "<button href='#' class='btn btn-defult btn-sm' role='button'>Detail</button>";
					btn_detail.className = "detailbutton";

					btn_detail.setAttribute("id", data.results[i].id);
					divD.appendChild(btn_detail);

					thumbnail.appendChild(divD);
					col.appendChild(thumbnail);
					div.appendChild(col);

				} //end search result filter

			}//end loop
			loading.hide();
		},//end callback function
		function(error){
			alert("Sorry. something wrong happened here.");
		} ) //end model

		dishes.append(div);
	}
	//End loadDishView function


	//this.update = function() {
	//	parent.loadDishView(parent.types, parent.searchnames);
	//}
	//model.addObserver(this);

	this.loadDishView(this.types, parent.searchnames);

}
