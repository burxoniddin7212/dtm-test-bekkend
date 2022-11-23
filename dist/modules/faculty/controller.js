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
let FIRSTBLOCK = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let science = yield modul_1.default.FIRSTBLOCK();
        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: science
        });
    }
    catch (error) {
        console.log(error);
        next(new error_2.InternalServerError('internal error'));
    }
});
let SECONDBLOCK = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.params.id) {
            next(new error_1.BedRequestError("bed request"));
        }
        let science = yield modul_1.default.SECONDBLOCK(req.params.id);
        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: science
        });
    }
    catch (error) {
        console.log(error);
        next(new error_2.InternalServerError('internal error'));
    }
});
let FORINSTITUTE = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.params.institute_id) {
            next(new error_1.BedRequestError("bed request"));
        }
        let faculty = yield modul_1.default.FORINSTITUTE(req.params.institute_id);
        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: faculty
        });
    }
    catch (error) {
        console.log(error);
        next(new error_2.InternalServerError('internal error'));
    }
});
let BYID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.params.faculty_id) {
            next(new error_1.BedRequestError("bed request"));
        }
        let faculty = yield modul_1.default.BYID(req.params.faculty_id);
        return res.status(200).send({
            status: 200,
            message: 'ok',
            data: faculty
        });
    }
    catch (error) {
        console.log(error);
        next(new error_2.InternalServerError('internal error'));
    }
});
exports.default = {
    FIRSTBLOCK,
    SECONDBLOCK,
    FORINSTITUTE,
    BYID
};
