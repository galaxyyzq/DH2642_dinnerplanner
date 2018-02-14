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
	var homeView = new HomeView($("#homeView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);


	//controllers
	 var indexController = new IndexController(homeView,sidebarView,dishView,model);
	 var dishViewController = new DishViewController(dishView,dishDetailView,model);
	 var dishDetailViewController = new DishDetailViewController(dishDetailView,dishView,model);
	 var lastDishViewController = new LastDishViewController(lastDishView,dinnerprintoutview,dishView,sidebarView,model);
	 var printoutController = new DinnerPrintOutController(dinnerprintoutview,dishView,sidebarView,model);
	 var sidebarViewController = new SidebarViewController(sidebarView,dishView,dishDetailView,lastDishView,model);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
