var DishViewController = function(view, model){

   $(".confirmdinner").click(function(){
   	$("#dishView").hide();
    $("#lastDishView").show();
   });

   $(".addbutton").click(function(){
   	$("#dishView").hide();
    $("#dishDetailView").show();
   });

}