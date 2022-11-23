"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heandler = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let heandler = (error, req, res, next) => {
    if (error.name == 'InternalServerError') {
        fs_1.default.appendFileSync(path_1.default.join(process.cwd(), 'src', 'log.tx'), `${req.url}--${req.method}--${Date.now()}---users-${req === null || req === void 0 ? void 0 : req.user_id}`);
        return res.status(500).send({
            status: 500,
            message: error.name
        });
    }
    if (error.name == 'AuthorizatsionError') {
        fs_1.default.appendFileSync(path_1.default.join(process.cwd(), 'src', 'log.tx'), `${req.url}--${req.method}--${Date.now()}---users-${req === null || req === void 0 ? void 0 : req.user_id}`);
        return res.status(401).send({
            status: 401,
            message: error.message
        });
    }
    if (error.name == 'ForbiddineError') {
        fs_1.default.appendFileSync(path_1.default.join(process.cwd(), 'src', 'log.tx'), `${req.url}--${req.method}--${Date.now()}---users-${req === null || req === void 0 ? void 0 : req.user_id}`);
        return res.status(403).send({
            status: 403,
            message: error.name
        });
    }
    if (error.name == 'BedRequestError') {
        fs_1.default.appendFileSync(path_1.default.join(process.cwd(), 'src', 'log.tx'), `${req.url}--${req.method}--${Date.now()}---users-${req === null || req === void 0 ? void 0 : req.user_id}`);
        return res.status(400).send({
            status: 400,
            message: error.message
        });
    }
};
exports.heandler = heandler;
