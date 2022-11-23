"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instituteSchema = exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerSchema = joi_1.default.object({
    full_name: joi_1.default.string().required(),
    user_name: joi_1.default.string().required().min(3).max(20),
    password: joi_1.default.string().required().min(5),
    tell_number: joi_1.default.string().required().min(9),
    region: joi_1.default.string().required(),
    gander: joi_1.default.string().required().valid('male', 'famele'),
}).meta({ className: 'Register' });
exports.loginSchema = joi_1.default.object({
    user_name: joi_1.default.string().required().min(3).max(20),
    password: joi_1.default.string().required().min(5),
}).meta({ className: 'Login' });
exports.instituteSchema = joi_1.default.object({
    first_block: joi_1.default.string().required(),
    second_block: joi_1.default.string().required(),
}).meta({ className: 'Institute' });
