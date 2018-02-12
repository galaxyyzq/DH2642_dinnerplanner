$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// ExampleView is used to test
	var exampleView = new ExampleView($(".exampleView"), model);
  var exampleViewController = new ExampleViewController(exampleView, model);

	//Other view
	var dishView = new DishView($("#dishView"), model);
	var menuView = new MenuView($(".menuView"), model);
	var menuView2 = new MenuView($(".menuView2"), model);
	var lastDishView = new LastDishView($("#lastDishView"), model);
	var dishDetailView = new DishDetailView($("#dishDetailView"), model);
	var dinnerprintoutview = new Dinnerprintoutview($("#contentview"), model);


	//controllers
	 var indexController = new IndexController(exampleView,model);
	 var dishViewController = new DishViewController(dishView,model);
	 var dishDetailViewController = new DishDetailViewController(dishDetailView,model);
	 var lastDishViewController = new LastDishViewController(lastDishView,model);
	 var printoutController = new DinnerPrintOutController(dinnerprintoutview,model);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
