var DishDetailViewController = function(view,model){

   $(".confirmbutton").click(function(){
   	$("#dishDetailView").hide();
    $("#lastDishView").show();
   });

   $(".backsearch").click(function(){
   	$("#dishDetailView").hide();
    $("#dishView").show();
   });
}
