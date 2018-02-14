var HomeView = function (container, model) {

	var createnewdinner= this.createnewdinner = container.find("#createnewdinner");

	//General State Function
	this.hide = function(){
		container.hide();
	}

    this.show = function(){
		container.show();
	}

}
