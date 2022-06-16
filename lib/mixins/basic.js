"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic = void 0;
var utils_1 = require("../common/utils");
exports.basic = Behavior({
    methods: {
        $emit: function (name, detail, options) {
            this.triggerEvent(name, detail, options);
        },
        set: function (data) {
            this.setData(data);
            return new Promise(function (resolve) { return (0, utils_1.nextTick)(resolve); });
        },
    },
});
