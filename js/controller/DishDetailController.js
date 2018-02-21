// 给每一个detail按钮都加上相应的监听
var DishDetailController = function(view, model){

//test id array
var id=[1,2,3];

for (var i = 0; i < id.length; i++) {

  var detailbutton= document.getElementsByClassName(id[i]);

  var listener = function(id){
    view.loadDishDetailView(id);
  }
  detailbutton.addEventListener("click",listener(id[i]),false);

}


}
