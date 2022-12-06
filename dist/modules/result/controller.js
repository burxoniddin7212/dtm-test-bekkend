"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
const error_1 = require("../../lib/error");
let GETRESULT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield model_1.default.GETRESULT();
        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: result
        });
    }
    catch (error) {
        next(new error_1.InternalServerError('internal error'));
    }
});
let GETRESULTBYID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield model_1.default.GETRESULTBYID(req.user_id);
        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: result
        });
    }
    catch (error) {
        next(new error_1.InternalServerError('internal error'));
    }
});
exports.default = {
    GETRESULT,
    GETRESULTBYID
};
