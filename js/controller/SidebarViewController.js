var SidebarViewController = function(view, model){

  view.confirmdinner.click(function(){
    view.hide();
    $("#dishView").hide();
    $("#lastDishView").show();
  });


}