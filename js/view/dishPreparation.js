var DishPreparation = function(container, model){
    
    var divcontent = document.createElement('DIV');
    divcontent.class = "content";
    
	for(var i = 0; i < model.getFullMenu().length; i++){
        
        var div = document.createElement('DIV');
    	div.className ="row-place";
        //?????????



    	var div1 = document.createElement('DIV');
        div1.id = 'column1';
        div1.className = 'col-md-2';
        var div2 = document.createElement('DIV');
        div2.id = 'column2';
        div2.className = 'col-md-4';
        var div3 = document.createElement('DIV');
        div3.id = 'column3';
        div3.className = 'col-md-6';
        

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
            

    	var img = document.createElement('img');
    	var src = "images/" + model.getFullMenu()[i].image;
    	img.setAttribute("src", src);
       // class="img-responsive" alt="Responsive image" style="margin: 20px 0 20px 0;"
        img.className = 'img-responsive'
        img.style = 'margin: 20px 0 20px 0;'

        div1.appendChild(img);
        
        var subtitle = document.createElement('H3');
        //subtitle.className = 'dishname';
        subtitle.innerHTML = model.getFullMenu()[i].name;
        var description = document.createElement('DIV');
        description.className = 'description6';
        description.innerHTML = model.getFullMenu()[i].description;
        div2.appendChild(subtitle);
        div2.appendChild(description);

        //<div class="col-md-5" style="padding:0 50px 0 10px">
          //<h2>LASAGNE</h2>
        
        var preparation = document.createElement('H4');
        preparation.className = 'preparation';
        preparation.innerHTML = 'Preparation';
        var description2 = document.createElement('DIV');
        description2.className = 'description6';
        description2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        div3.appendChild(preparation);
        div3.appendChild(description2);
        divcontent.appendChild(div);    
        
        //div.appendChild('DIV');


    }
	
    container.append(divcontent);
}


