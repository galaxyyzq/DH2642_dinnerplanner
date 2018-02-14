// Control the dropdown menu to select different type of dishes
var DishFilterController = function(view, model){

  var filter= $("#filter").get(0);

  var listener = function(){
    var val =$("#filter").val();
    view.types = val;
    view.loadDishView(val);
  }

  filter.addEventListener("change",listener,false);

}
