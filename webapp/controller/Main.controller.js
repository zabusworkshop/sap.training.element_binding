sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.Main", {

		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("json/data.json");
			this.getView().setModel(oModel);
		}

	});
});