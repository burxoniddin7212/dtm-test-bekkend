"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joiValidation_1 = require("./middleweire/joiValidation");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const errorHeandler_1 = require("./lib/errorHeandler");
const router_1 = __importDefault(require("./modules/users/router"));
const router_2 = __importDefault(require("./modules/faculty/router"));
const router_3 = __importDefault(require("./modules/institute/router"));
const router_4 = __importDefault(require("./modules/tests/router"));
const router_5 = __importDefault(require("./modules/calculate_result/router"));
const router_6 = __importDefault(require("./modules/result/router"));
let app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(joiValidation_1.validation);
app.use(router_1.default);
app.use(router_2.default);
app.use(router_3.default);
app.use(router_4.default);
app.use(router_5.default);
app.use(router_6.default);
app.use(errorHeandler_1.heandler);
app.listen(config_1.PORT, () => console.log("server readey " + config_1.PORT));
