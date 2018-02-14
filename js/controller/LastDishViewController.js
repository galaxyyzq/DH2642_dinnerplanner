var LastDishViewController = function(view1,view2,view3,view4,model){

   view1.printbutton.click(function(){
        view1.hide();
        view2.show();
	});

    view1.backbutton.click(function(){
        view1.hide();
        view3.show();
        view4.show();
	});


}
