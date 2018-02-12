var DishViewController = function(view, model){

   $(".confirmdinner").click(function(){
   	$("#dishView").hide();
   	$("#sidebarView").hide();
    $("#lastDishView").show();
   });

   $(".detailbutton").click(function(){
   	$("#dishView").hide();
    $("#dishDetailView").show();
   });

}
