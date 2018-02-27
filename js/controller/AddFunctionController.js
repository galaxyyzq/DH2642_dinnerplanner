var AddFunctionController = function(view, model,app){

    view.container.on('click', '.addButton', function(){
        var id = $(this).attr('id');
        view.currentDishId = id;
        model.addDishToMenu(id);
    });

}
