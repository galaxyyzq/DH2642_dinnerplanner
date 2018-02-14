var DishViewController = function(view, model){


  // view.on("click",".detailbutton",function(){
    // view.hide();
    // $("#dishDetailView").show();
  // });

  view.detailbutton.click(function(){
  	console.log('yo');
    view.hide();
    $("#dishDetailView").show();
  });

  
}
