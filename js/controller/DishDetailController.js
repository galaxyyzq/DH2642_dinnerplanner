var DishViewController = function(view, model,app){

    view.container.on('click', '.detailbutton', function(){
        var id = $(this).attr('id');
        app.showDishDetailsScreen(id);
        view.container.hide();
    });

}
