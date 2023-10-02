sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit: function () {
        //set the data model on the view
        var oData = {
          recipient: {
            name: "UI5",
            phone: "1234567890",
          },
        };
        // this._oRecipientModel = new sap.ui.model.json.JSONModel(oData);
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },

      onShowHello: function () {
        // show a native or vanilla JS alert
        MessageToast.show("Hello World");
      },
    });
  }
);
