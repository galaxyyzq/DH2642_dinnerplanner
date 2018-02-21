// Control the dropdown menu to select different type of dishes
var DishFilterController = function(view, model){

  var filter= $("#filter").get(0);
  var search= $("#search").get(0);

  var listener_filter = function(){
    var typeVal =$("#filter").val();
    var nameVal = $("#search").val();
    view.types = typeVal;
    view.searchnames = nameVal;
    view.loadDishView(typeVal,nameVal);
  }

  var listener_search = function(){
    var nameVal = $("#search").val();
      var typeVal =$("#filter").val();
    view.searchnames = nameVal;
    view.types = typeVal;
    view.loadDishView(typeVal,nameVal)

  }

  filter.addEventListener("change",listener_filter,false);
  search.addEventListener("input", listener_search, false);

}
