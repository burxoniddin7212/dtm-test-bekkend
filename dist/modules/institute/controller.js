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
const modul_1 = __importDefault(require("./modul"));
const error_1 = require("../../lib/error");
let GET = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let institute = yield modul_1.default.GET(req.body);
        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: institute
        });
    }
    catch (error) {
        next(new error_1.InternalServerError('internal error'));
    }
});
exports.default = {
    GET
};
