sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
], function(Controller, Fragment) {
	"use strict";

	return Controller.extend("sap.training.controller.Main", {

		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("json/data.json");
			this.getView().setModel(oModel);
		},
		
		onCarrierSelectionChange: function (oEvent) {
			var oListItem = oEvent.getParameter("listItem");
			var sPath = oListItem.getBindingContext().getPath();
			var oTable = this.getView().byId("idConnTable");
			oTable.bindElement(sPath);
		},
		
		onRouteSelected: function (oEvent) {
			var oListItem = oEvent.getParameter("listItem");
			var sPath = oListItem.getBindingContext().getPath();
			var oView = this.getView();
			Fragment.load({
				name: "sap.training.view.FlightInfo",
				type: "XML",
				controller: this
			}).then(function (oDialog) {
				this.oDialog = oDialog;
				oView.addDependent(oDialog);
				oDialog.bindElement(sPath);
				oDialog.open();
			}.bind(this));
		},
		
		onSaveDialog: function () {
			this.oDialog.close();
		}

	});
});







