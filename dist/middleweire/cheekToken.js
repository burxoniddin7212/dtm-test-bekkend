"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("../lib/jwt"));
const error_1 = require("../lib/error");
let cheekToken = (req, res, next) => {
    try {
        let { token } = req.headers;
        if (!token)
            next(new error_1.ForbiddineError('token requaried'));
        let { user_id } = jwt_1.default.verify(token);
        if (user_id)
            req.user_id = user_id;
        next();
    }
    catch (error) {
        next(new error_1.ForbiddineError(error.message));
    }
};
exports.default = cheekToken;
