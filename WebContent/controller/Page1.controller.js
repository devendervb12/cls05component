sap.ui.controller("emax.cls05.controller.Page1",{
	
	/*gotoPage2 : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("p2");
	},*/
	
	onItemSelection : function(oEvent){
		
		//debugger;
		//var prodId = oEvent.getSource().getTitle();
		//navigatee to page2
		this.getOwnerComponent().getRouter().navTo("p2", {pid : oEvent.getSource().getTitle() });
	}
})