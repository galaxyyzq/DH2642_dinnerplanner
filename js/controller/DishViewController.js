var DishViewController = function(view1,view2, model){


  // view.on("click",".detailbutton",function(){
    // view.hide();
    // $("#dishDetailView").show();
  // });


  var btn_detail = document.getElementsByClassName("detailbutton");
  var listner = function(){
    view1.hide();
    view2.show();
  }

  for(var i = 0; i < btn_detail.length; i++){
    btn_detail[i].addEventListener("click",listner,false);
  }
  
}
