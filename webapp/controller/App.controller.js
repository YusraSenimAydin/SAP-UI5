sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "spa/ui/model/resource/ResorceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResorceModel) {
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

        //set i18n model on view
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.getView().setModel(i18nModel, "i18n");
      },

      onShowHello: function () {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // Show message
        MessageToast.show(sMsg);

        // show a native or vanilla JS alert
        //  MessageToast.show("Hello World");
      },
    });
  }
);
