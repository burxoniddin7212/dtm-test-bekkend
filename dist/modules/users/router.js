"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
let router = (0, express_1.Router)();
router.get('/users', controller_1.default.GET);
router.post('/register', controller_1.default.POST);
router.post('/login', controller_1.default.LOGIN);
exports.default = router;
