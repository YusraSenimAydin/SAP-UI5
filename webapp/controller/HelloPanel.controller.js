sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
<<<<<<< HEAD
  function (Controller, MessageToast, Fragment) {
    "use strict";

=======
  function (Controller, MessageToast, Fragement) {
    "use strict";
>>>>>>> 6a4f7c91d44298ab3d27fcdd269f4e66bad99a8b
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello: function () {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
<<<<<<< HEAD

        // show message
        MessageToast.show(sMsg);
      },

      onOpenDialog: function () {
        var oView = this.getView();
        //create the dialog lazily
        if (!this.byId("helloDialog")) {
          Fragment.load({
            // load asynchronous XML fragment
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
            controller: this
=======
        // Show message
        MessageToast.show(sMsg);
      },
      onOpenDialog: function () {
        var oView = this.getView();

        // create the dialog lazily
        if (!this.byId("helloDialog")) {
          // load asynchronous XML fragment
          Fragement.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
            controller: this,
>>>>>>> 6a4f7c91d44298ab3d27fcdd269f4e66bad99a8b
          }).then(function (oDialog) {
            // connect dialog to the root view of this component (models, lifecycle)
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("helloDialog").open();
        }
      },
<<<<<<< HEAD

      onCloseDialog: function () {
        // note: We don't need to chain to the pDialog promise, since this event-handler
        // is only called from within the loaded dialog itself.
=======
      onCloseDialog: function () {
>>>>>>> 6a4f7c91d44298ab3d27fcdd269f4e66bad99a8b
        this.byId("helloDialog").close();
      },
    });
  }
);
