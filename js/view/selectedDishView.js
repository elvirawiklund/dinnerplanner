//ExampleView Object constructor
var SelectedDishView = function (container, model) {
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.dishPrice = container.find("#dishPrice");
	this.totalPrice = container.find("#totalPrice");
	this.dishName = container.find("#dishName");
 
 
 
	this.delay = function(ms) {
		ms += new Date().getTime();
		while (new Date() < ms){}
		}
 
 
    this.updateView = function(){

    	var currID = model.getCurrentDish();
		var Dish = container.find("#Dish");
		var guests = model.getNumberOfGuests();
		var total = 0;
		
		var dish = model.getOneRecipe();
		console.log(dish);
		var Ingredients = dish.Ingredients;
		
		this.getIngredients = function ()
		{
		var page ='';
		page += '<div class="row">';
		page += "<div class='col-md-6'>";
		page += "<h2>"+dish.Title+'</h2></br>';
		page += "<img src="+dish.ImageURL+' height="250px"><br/>';
		page += "<h3>Description</h3><p style='margin-top:5%;''>"+dish.Description+'</p>';
		page += "<h3>Instructions</h3><p>"+dish.Instructions+"</p>";
		page += "<button class='backsies' type='submit' style='background:#FFEEEB;'>Back to select dish</button>";
		page += "</div>";
		page += "<div class='col-md-6' style='height: 550px; background:#FFEEEB;'>";
		page += "<h3 style='font-family: Chalkboard'>Ingredients for "+guests+" people<h3></br>";



		if(Ingredients != undefined){
			for (j=0;j<Ingredients.length;j++){

				var ingredient = Ingredients[j];
				page += "<h4>"+Math.ceil(ingredient.Quantity*guests)+" "+ingredient.Unit+" ";
				page += ingredient.Name;
				page += " SEK "+Math.ceil(ingredient.Quantity*guests)+"</h4>";
				total += Math.ceil(Number(ingredient.Quantity*guests));
			}
		}

	page += "<button class='confirmed' type='submit' style='background:#FFEEEB; margin-bottom:5px; margin-right:30px;'>"
	page +="Confirm Dish</button>Total "+total+"</div></div>";
	return page;
	}


		Dish.html(this.getIngredients);
		this.backsies = container.find(".backsies");
		this.confirmed = container.find(".confirmed");

		this.tryIt = function(){ //since the controller doesn't exists yet the first time the view is runned
			try{
				selectedDishViewController.refresh();
			}
			catch(err){

			}
		}
		this.tryIt();
		
 	}
	this.updateView();
 	model.addObserver(this);
}
