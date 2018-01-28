var DishPreparation = function(container, model){
    
    var divcontent = document.createElement('div');
    divcontent.class = "content";
    
	for(var i = 0; i < model.getFullMenu().length; i++){
        
        var div = document.createElement('div');
    	div.className ="row-place";

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
        div1.appendChild(img);
        
        var subtitle = document.createElement('DIV');
        subtitle.className = 'sub-title';
        subtitle.innerHTML = model.getFullMenu()[i].name;
        var description = document.createElement('DIV');
        description.className = 'description6';
        description.innerHTML = model.getFullMenu()[i].description;
        div2.appendChild(subtitle);
        div2.appendChild(description);
        
        var preparation = document.createElement('DIV');
        preparation.className = 'preparation';
        preparation.innerHTML = 'Preparation';
        var description2 = document.createElement('DIV');
        description2.className = 'description6';
        description2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        div3.appendChild(preparation);
        div3.appendChild(description2);
        
        divcontent.appendChild(div);	

    }
	
    container.append(divcontent);
}


