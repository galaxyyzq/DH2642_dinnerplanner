var Dinnerprintoutview = function(container, model){

	//General State Function
	this.hide = function(){
		container.hide();
	}

	this.show = function(){
		container.show();
	}


	//Define variables
	var guestnumber = container.find(".numberOfGuests");
	var printcontent = container.find(".printcontent");
	var backbutton=this.backbutton = container.find(".backbutton");


	//Construct View Function
	var loadDinnerPrintOutView = function(){

		guestnumber.html("");
		printcontent.html("");

		//Display guestnumber
		var guestnumbernode = document.createElement('span');

		var guestnumbervalue = model.getNumberOfGuests();
		guestnumber.append(guestnumbernode);
		guestnumbernode.innerHTML = "Your Dinner includes "+ guestnumbervalue + "people";

		var contentview = document.createElement('div');

		for(var i = 0; i < model.getFullMenu().length; i++){

			var onedishcontent = document.createElement('div');
			onedishcontent.className = "col-md-12 row";

			//Create img column
			var imgcolumn = document.createElement('div');
			imgcolumn.className ="col-md-4";
			var img = document.createElement('img');
			var src = model.getFullMenu()[i].image;
			img.setAttribute("src", src);
			img.className = 'img-responsive';
			img.style = 'margin: 20px 0 20px 0;';

			//create titlecolumn
			var titlecolumn = document.createElement('div');
			titlecolumn.className = "col-md-4";
			titlecolumn.style = "padding: 0 50px 0 10px";
			var title = document.createElement('h2');
			title.innerHTML = model.getFullMenu()[i].title;
			var description = document.createElement('p');

			//create preparation column
			var precolumn = document.createElement('div');
			precolumn.className = "col-md-4";
			var title2 = document.createElement('h4');
			title2.innerHTML = "Preparation";
			var preparation = document.createElement('p');
			preparation.innerHTML = model.getFullMenu()[i].instructions;

			contentview.appendChild(onedishcontent);

			onedishcontent.appendChild(imgcolumn);
			imgcolumn.appendChild(img);

			onedishcontent.appendChild(titlecolumn);
			titlecolumn.appendChild(title);
			titlecolumn.appendChild(description);

			onedishcontent.appendChild(precolumn);
			precolumn.appendChild(title2);
			precolumn.appendChild(preparation);

		}
		printcontent.append(contentview);
	}
	//End loadDinnerPrintOutView functions

	this.update = function() {
		loadDinnerPrintOutView();
	}

	model.addObserver(this);
	loadDinnerPrintOutView();

}
