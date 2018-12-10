"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var index_1 = require("./index");
var DieselEngine = /** @class */ (function (_super) {
    __extends(DieselEngine, _super);
    function DieselEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DieselEngine;
}(index_1.Engine));
var dieselCar = new DieselEngine();
