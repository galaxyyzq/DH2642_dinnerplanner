var GeneralController = function(view1,view2,view3,view4,view5,view6,model){

    view1.createnewdinner.click(function(){
        view1.hide();
        view2.show();
        view3.show();
	});

	$("#dishView").on("click",".detailbutton",function(){
        view3.hide();
        view4.show();
    });

    view4.backsearch.click(function(){
   	view4.hide();
    view3.show();
    });

    view5.printbutton.click(function(){
        view5.hide();
        view6.show();
	});

    view5.backbutton.click(function(){
        view5.hide();
        view2.show();
        view3.show();
	});

	view6.backbutton.click(function(){
		view6.hide();
        view2.show();
        view3.show();

	});

	view2.confirmdinner.click(function(){
        view2.hide();
        view3.hide();
        view4.hide();
        view5.show();
    });


}
