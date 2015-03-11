//ExampleViewController Object constructor
var SelectedDishViewController = function(view, model ) {

this.refresh = function(){
	view.backsies.click(function(){
 	
   	 $("#specificDish").hide();
   	 $("#SideBar").show();
   	 $("#AllDishes").show();

	});

	view.confirmed.click(function(){
 		model.addDishToMenu(model.getOneRecipe().RecipeID);
 
   	 $("#specificDish").hide();
   	 $("#SideBar").show();
   	 $("#AllDishes").show();
   	 console.log(model.getFullMenu())

	});
}

}
