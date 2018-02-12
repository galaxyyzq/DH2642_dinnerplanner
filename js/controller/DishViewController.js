var DishViewController = function(view, model){

  $(".confirmdinner").click(function(){
    $("#dishView").hide();
    $("#sidebarView").hide();
    $("#lastDishView").show();
  });

  $("#dishView").on("click",".detailbutton",function(){
    $("#dishView").hide();
    $("#dishDetailView").show();
  });

}
