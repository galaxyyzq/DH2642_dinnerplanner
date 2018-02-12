var dishFilterController = function(view, model){

  var selectValue = $("#filter").val();

  if (selectValue == "starter") {
    model.getSelectedDish('starter');
  } else if (selectValue == "dessert") {
    model.getSelectedDish('dessert');
  } else {
    model.getSelectedDish('main dish');
  }

}
