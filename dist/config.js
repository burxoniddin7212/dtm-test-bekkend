"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgConfig = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 9000;
exports.PORT = PORT;
const pgConfig = {
    user: process.env.PG_USER || "",
    host: process.env.PG_HOST || "",
    database: process.env.PG_DATABASE || "",
    password: process.env.PG_PASSWORD || "",
    port: process.env.PG_PORT || ""
};
exports.pgConfig = pgConfig;
