var SidebarView = function (container, model) {

	var confirmdinner= this.confirmdinner = container.find(".confirmdinner");

	//General State Function
	this.hide = function(){
		container.hide();
	}

    this.show = function(){
		container.show();
	}

}
