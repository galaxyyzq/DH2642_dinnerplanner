// Control the view display
var GeneralController = function(homeView,sidebarView,dishView,dishDetailView,lastDishView,dinnerprintoutview,model,app){

  homeView.createnewdinner.click(function(){

    app.showDishScreen();

  });


  dishDetailView.backsearch.click(function(){

    app.showDishScreen();

  });

  lastDishView.printbutton.click(function(){

    app.showPrintScreen();

  });

  lastDishView.backbutton.click(function(){

    app.showDishScreen();

  });

  dinnerprintoutview.backbutton.click(function(){

    app.showDishScreen();

  });

  sidebarView.confirmdinner.click(function(){

    app.showLastDishScreen();

  });


}
