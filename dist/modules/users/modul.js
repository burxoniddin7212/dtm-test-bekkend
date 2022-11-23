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
const sha256_1 = __importDefault(require("sha256"));
const query_1 = __importDefault(require("./query"));
const postgres_1 = require("../../lib/postgres");
let GET = () => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield (0, postgres_1.fetchAll)(query_1.default.GET);
    return users;
});
let POST = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let users1 = yield (0, postgres_1.fetchAll)(query_1.default.GET);
    let user = yield (users1 === null || users1 === void 0 ? void 0 : users1.find(data1 => data1.password == (0, sha256_1.default)(data.password) && data1.full_name == data.full_name));
    if (user)
        return false;
    data.password = (0, sha256_1.default)(data.password);
    let users = yield (0, postgres_1.fetch)(query_1.default.POST, [data.full_name, data.user_name, data.password, data.tell_number, data.region, data.gander]);
    return users;
});
let LOGIN = (data) => __awaiter(void 0, void 0, void 0, function* () {
    data.password = (0, sha256_1.default)(data.password);
    let users = yield (0, postgres_1.fetch)(query_1.default.LOGIN, [data.user_name, data.password]);
    return users;
});
exports.default = {
    GET,
    POST,
    LOGIN
};
