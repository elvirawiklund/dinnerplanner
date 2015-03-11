//ExampleView Object constructor
var DishSelectView = function (container, model) { //The view
	

	var Dishes = container.find("#Dishes");

	this.updateView = function(arg){
		$(".Loading").hide();
		
		if(arg === "error") {
			$(".Error").show();
		}else {
			var Dish ='';
			var AllType = model.getSearchWord(); 
			console.log(AllType);
			
			this.getDishes = function ()
			{
				Dish += '<div class="row" style="margin-top:5%;">';
				for (k=0;k<AllType.length;k++)
				{
					var dish = AllType[k];
					Dish += "<div class='col-md-3'>";
					Dish += "<center><img class='buttons' id='"+dish.RecipeID+"' src='"+dish.ImageURL+"' height='100px' width='100px'><br/><h4>";
					Dish += dish.Title;
					Dish += "<h4>";
					Dish += '</div></center>';
				}
				Dish += "</div>"
			return Dish
			};

			Dishes.html(this.getDishes());
			this.buttons = container.find(".buttons");
			this.dropdown = container.find(".dropdown");
			this.search = container.find("#searchbutton");

			this.tryIt = function(){ //since the controller doesn't exists yet the first time the view is runned
				try{
					dishSelectViewController.refresh();
				}
				catch(err){

				}
			}
			this.tryIt();
		}
		
	}

	this.updateView();
 	model.addObserver(this);
 
}
