var SidebarViewController = function(view1,view2,view3,model){

  view1.confirmdinner.click(function(){
    view1.hide();
    view2.hide();
    view3.show();
  });

}