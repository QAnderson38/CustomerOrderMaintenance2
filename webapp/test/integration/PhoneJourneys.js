jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/demo/customer/order/maintain/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/demo/customer/order/maintain/test/integration/pages/App",
	"com/sap/demo/customer/order/maintain/test/integration/pages/Browser",
	"com/sap/demo/customer/order/maintain/test/integration/pages/Master",
	"com/sap/demo/customer/order/maintain/test/integration/pages/Detail",
	"com/sap/demo/customer/order/maintain/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.demo.customer.order.maintain.view."
	});

	sap.ui.require([
		"com/sap/demo/customer/order/maintain/test/integration/NavigationJourneyPhone",
		"com/sap/demo/customer/order/maintain/test/integration/NotFoundJourneyPhone",
		"com/sap/demo/customer/order/maintain/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});