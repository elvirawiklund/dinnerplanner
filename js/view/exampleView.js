//ExampleView Object constructor
var ExampleView = function (container, model) { //This view is for the first and second pages
	$("#SideBar").hide();
    $("#AllDishes").hide();
    $("#specificDish").hide();
    $("#secondHeader").hide();
    $("#presentedMenu").hide();
    $("#finalMenu").hide();
    $(".Loading").hide();
	$(".Error").hide();
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.priceDish = container.find("#priceDish");
	this.totalPrice = container.find("#totalPrice");
	this.dishName = container.find("#dishName");
	this.Dishes = container.find("#Dishes");
	this.Start = container.find("#Start");
	this.Confirm = container.find("#Confirm");
	

	this.updateView = function(){
		this.getName = function()
		{	
			var info = '';
			var FullMenu = model.getFullMenu();
			for (var i=0;i<FullMenu.length;i++){
			var food = FullMenu[i];
			info += '<button id="';
			info += food.RecipeID+'" class="delete"><span class="glyphicon glyphicon-remove"></span></button> '+food.Title.substr(0, 20)+'<br />';
			}
		
		return info;
	}

		this.dishName.html(this.getName());

		this.remove = container.find(".delete");
		var totalPrice = 0;
	
		this.getPrice = function()
		{	

			var info = '';
			var FullMenu = model.getFullMenu();
				
			for (var i=0;i<FullMenu.length;i++){
				var food = FullMenu[i];
				var id = food.RecipeID;
				var singleCost = Math.ceil(model.getPriceDish(id));
				info += singleCost+'</br>';

				totalPrice += singleCost;
				}
		
		return info;
	}

		this.priceDish.html(this.getPrice());
		this.numberOfGuests.html(model.getNumberOfGuests);
		this.totalPrice.html(totalPrice);

		this.tryIt = function(){ //since the controller doesn't exists yet the first time the view is runned
			try{
				exampleViewController.refresh();
			}
			catch(err){

			}
		}
		this.tryIt();
		
	}

	this.updateView();
 	model.addObserver(this);
}
