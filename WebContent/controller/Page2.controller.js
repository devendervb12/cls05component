sap.ui.controller("emax.cls05.controller.Page2",{
	

	onInit : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.getRoute("p2").attachPatternMatched(function(oEvent){
			debugger;
			var productID = oEvent.getParameters().arguments.pid;
			
			this.getView().bindElement("/ProductSet('"+productID+"')");
		},this)
	},
	
	gotoPage1 : function(){
		
		this.getOwnerComponent().getRouter().navTo("home");
	}
})