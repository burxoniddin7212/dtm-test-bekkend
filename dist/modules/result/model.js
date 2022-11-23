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
const query_1 = __importDefault(require("./query"));
const postgres_1 = require("../../lib/postgres");
let GETBUDJET = () => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, postgres_1.fetchAll)(query_1.default.GETBUDJET);
    return result;
});
let GETCONTRAKT = () => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, postgres_1.fetchAll)(query_1.default.GETCONTRAKT);
    return result;
});
let INSERTRESULT = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, postgres_1.fetch)(query_1.default.INSERTRESULT, [data.user_id, data.institue_id, data.faculty_id, data.first_block_mark, data.second_block_mark, data.result_user]);
    return result;
});
let UPDATERESULT = (result_id) => __awaiter(void 0, void 0, void 0, function* () {
    let result = (yield (0, postgres_1.fetch)(query_1.default.UPDATERESULT, [result_id])) || [];
    return result;
});
let UPDATERESULTT = (result_id) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, postgres_1.fetch)(query_1.default.UPDATERESULTT, [result_id]);
    return result;
});
let GETRESULT = () => __awaiter(void 0, void 0, void 0, function* () {
    let result = (yield (0, postgres_1.fetchAll)(query_1.default.GETRESULT)) || [{}];
    result === null || result === void 0 ? void 0 : result.forEach(data => {
        data.total_score = +(data.first_block_ball) + (+data.second_block_ball);
    });
    result === null || result === void 0 ? void 0 : result.sort(function (x, y) {
        return x.total_score - y.total_score;
    });
    return result === null || result === void 0 ? void 0 : result.reverse();
});
let GETRESULTBYID = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, postgres_1.fetchAll)(query_1.default.GETRESULTBYID, [user_id]);
    return result === null || result === void 0 ? void 0 : result.reverse();
});
exports.default = {
    GETBUDJET,
    GETCONTRAKT,
    INSERTRESULT,
    UPDATERESULT,
    UPDATERESULTT,
    GETRESULT,
    GETRESULTBYID
};
