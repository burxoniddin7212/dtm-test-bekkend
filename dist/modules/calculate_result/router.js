"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cheekToken_1 = __importDefault(require("../../middleweire/cheekToken"));
const controller_1 = __importDefault(require("./controller"));
let router = (0, express_1.Router)();
router.post('/calculate_result', [cheekToken_1.default], controller_1.default.CALCULATERESULT);
exports.default = router;
