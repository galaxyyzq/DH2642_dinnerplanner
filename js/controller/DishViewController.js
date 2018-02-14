var DishViewController = function(view1,view2, model){

$("#dishView").on("click",".detailbutton",function(){
  view1.hide();
  view2.show();
});

  //
  // var btn_detail = document.getElementsByClassName("detailbutton");
  // var listner = function(){
  //   view1.hide();
  //   view2.show();
  // }
  //
  // for(var i = 0; i < btn_detail.length; i++){
  //   btn_detail[i].addEventListener("click",listner,false);
  // }

}
