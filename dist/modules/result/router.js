"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cheekToken_1 = __importDefault(require("../../middleweire/cheekToken"));
const controller_1 = __importDefault(require("./controller"));
let router = (0, express_1.Router)();
router.get('/result', controller_1.default.GETRESULT);
router.get('/result_user', [cheekToken_1.default], controller_1.default.GETRESULTBYID);
exports.default = router;
