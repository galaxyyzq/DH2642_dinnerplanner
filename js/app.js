$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//view
	var guestNumberView = new GuestNumberView($(".guestNumberView"), model);
	var dishView = new DishView($("#dishView"), model);
	var menuView = new MenuView($(".menuView"), model);
	var menuView2 = new MenuView($(".menuView2"), model);
	var lastDishView = new LastDishView($("#lastDishView"), model);
	var dishDetailView = new DishDetailView($("#dishDetailView"), model);
	var dinnerprintoutview = new Dinnerprintoutview($("#contentview"), model);
	var homeView = new HomeView($("#homeView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);

	//Controllers
	var guestNumberViewController = new GuestNumberViewController(guestNumberView, model);
	var generalController = new GeneralController(homeView,sidebarView,dishView,dishDetailView,lastDishView,dinnerprintoutview,model,this);
	var dishFilterController= new DishFilterController(dishView,model);
	var dishViewController = new DishViewController(dishView, model, this);
	var addFunctionController = new AddFunctionController(dishDetailView, model, this);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

	var hideAllViews = function(){
        $('#dishView').hide();
        $('#lastDishView').hide();
        $('#sidebarView').hide();
        $('#dishDetailView').hide();
        $('#contentview').hide();
        $('#homeView').hide();
    }


    this.showDishScreen =  function(){
        hideAllViews();
        $('#sidebarView').show();
        $('#dishView').show();
    }

    this.showPrintScreen = function(){
        hideAllViews();
        $("#contentview").show();
    }

    this.showDishDetailsScreen = function(id) {
	 		dishDetailView.show();
	 		dishDetailView.loadDishDetailView(id);
	}

	this.showLastDishScreen = function() {
	 	    hideAllViews();
	 		$('#lastDishView').show();
	}


});
