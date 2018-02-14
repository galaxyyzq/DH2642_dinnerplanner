var LastDishViewController = function(view,model){

   view.printbutton.click(function(){
        view.hide();
        $("#contentview").show();
	});

    view.backbutton.click(function(){
        view.hide();
        $("#dishView").show();
        $("#sidebarView").show();
	});


}
