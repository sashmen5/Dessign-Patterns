var iPhoneXS = (function () {
    function iPhoneXS() {
    }
    iPhoneXS.prototype.useLightning = function () {
        console.log('Using lightning port.');
    };
    return iPhoneXS;
}());
var GooglePixel = (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useTypeC = function () {
        console.log('Using type-c');
    };
    return GooglePixel;
}());
var LightningToTypeCAdapter = (function () {
    function LightningToTypeCAdapter(iphoneDevice) {
        this.iphoneDevice = iphoneDevice;
    }
    LightningToTypeCAdapter.prototype.useTypeC = function () {
        console.log('Want to use Type-C, converting to Lightning');
        this.iphoneDevice.useLightning();
    };
    return LightningToTypeCAdapter;
}());
