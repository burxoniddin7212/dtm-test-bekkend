"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
let router = (0, express_1.Router)();
router.get('/first_block', controller_1.default.FIRSTBLOCK);
router.get('/second_block/:id', controller_1.default.SECONDBLOCK);
router.get('/faculty_inst/:institute_id', controller_1.default.FORINSTITUTE);
router.get('/faculty/:faculty_id', controller_1.default.BYID);
exports.default = router;
