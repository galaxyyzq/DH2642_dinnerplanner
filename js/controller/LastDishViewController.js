var LastDishViewController = function(view,model){

   $("#printbutton").click(function(){
   	$("#lastDishView").hide();
    $("#contentview").show();
   });

   $(".backbutton").click(function(){
   	$("#lastDishView").hide();
    $("#dishView").show();
    $("#sidebarView").show();
   });


}
