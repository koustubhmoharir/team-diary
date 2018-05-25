"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter = /** @class */ (function () {
    function Greeter() {
        //element: HTMLElement;
        //span: HTMLElement;
        this.timerToken = 0;
    }
    //constructor(element: HTMLElement) {
    //    this.element = element;
    //    this.element.innerHTML += "The time is: ";
    //    this.span = document.createElement('span');
    //    this.element.appendChild(this.span);
    //    this.span.innerText = new Date().toUTCString();
    //}
    //start() {
    //    this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    //}
    //stop() {
    //    clearTimeout(this.timerToken);
    //}
    Greeter.add = function () {
        var i = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            i[_i] = arguments[_i];
        }
        i.reduce(function (p, c) { return p + c; }, 0);
    };
    return Greeter;
}());
exports.Greeter = Greeter;
//window.onload = () => {
//    var el = document.getElementById('content');
//    var greeter = new Greeter(el);
//    greeter.start();
//};
