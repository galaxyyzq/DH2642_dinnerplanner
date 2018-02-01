var DishPreparation = function(container, model){


  for(var i = 0; i < model.getFullMenu().length; i++){

    var contentview = document.getElementById('contentview')
    var onedishcontent = document.createElement('div');
    onedishcontent.className = "col-md-12 row";


    //Create img column
    var imgcolumn = document.createElement('div');
    imgcolumn.className ="col-md-2";
    var img = document.createElement('img');
    var src = "images/" + model.getFullMenu()[i].image;
    img.setAttribute("src", src);
    img.className = 'img-responsive';
    img.style = 'margin: 20px 0 20px 0;';

    //create titlecolumn
    var titlecolumn = document.createElement('div');
    titlecolumn.className = "col-md-5";
    titlecolumn.style = "padding: 0 50px 0 10px";
    var title = document.createElement('h2');
    title.innerHTML = model.getFullMenu()[i].name;
    var description = document.createElement('p');
    description.innerHTML = model.getFullMenu()[i].description;

    //create preparation column
    var precolumn = document.createElement('div');
    precolumn.className = "col-md-2";
    var title2 = document.createElement('h4');
    title2.innerHTML = "Preparation";
    var preparation = document.createElement('p');
    preparation.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    contentview.appendChild(onedishcontent);

    onedishcontent.appendChild(imgcolumn);
    imgcolumn.appendChild(img);

    onedishcontent.appendChild(titlecolumn);
    titlecolumn.appendChild(title);
    titlecolumn.appendChild(description);

    onedishcontent.appendChild(precolumn);
    precolumn.appendChild(title2);
    precolumn.appendChild(preparation);

  }
}
