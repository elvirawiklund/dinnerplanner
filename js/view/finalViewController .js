//ExampleViewController Object constructor
var FinalViewController = function(view, model ) {

this.refresh = function(){
	menuView.back.click(function(){
 	
   	$("#finalMenu").hide();
	$("#secondHeader").hide();
    $("#presentedMenu").hide();
    $("#SideBar").show();
    $("#AllDishes").show();

	});


}

}
