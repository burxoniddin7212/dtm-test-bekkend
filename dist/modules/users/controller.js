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
const error_1 = require("./../../lib/error");
const modul_1 = __importDefault(require("./modul"));
const error_2 = require("../../lib/error");
const jwt_1 = __importDefault(require("../../lib/jwt"));
let GET = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = yield modul_1.default.GET();
        users === null || users === void 0 ? void 0 : users.forEach(data => {
            delete data.password;
        });
        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: users
        });
    }
    catch (error) {
        next(new error_2.InternalServerError('internal error'));
    }
});
let POST = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = yield modul_1.default.POST(req.body);
        if (!users)
            next(new error_1.BedRequestError('passwor or full_name unieq'));
        delete users.password;
        return res.status(200).send({
            status: 201,
            message: 'ok',
            data: users,
            token: jwt_1.default.sign({ user_id: users.user_id })
        });
    }
    catch (error) {
        next(new error_2.InternalServerError('internal error'));
    }
});
let LOGIN = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield modul_1.default.LOGIN(req.body);
        if (!user)
            next(new error_1.BedRequestError('not found'));
        if (user) {
            user === null || user === void 0 ? true : delete user.password;
            return res.status(200).send({
                status: 201,
                message: 'ok',
                data: user,
                token: jwt_1.default.sign({ user_id: user === null || user === void 0 ? void 0 : user.user_id })
            });
        }
    }
    catch (error) {
        next(new error_2.InternalServerError('internal error'));
    }
});
exports.default = {
    GET,
    POST,
    LOGIN
};
