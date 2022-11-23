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
let FIRSTBLOCK = () => __awaiter(void 0, void 0, void 0, function* () {
    let science = yield (0, postgres_1.fetchAll)(query_1.default.FIRSTBLOCK);
    return science;
});
let SECONDBLOCK = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let science = yield (0, postgres_1.fetchAll)(query_1.default.SECONDBLOCK, [id]);
    return science;
});
let FORINSTITUTE = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let faculty = yield (0, postgres_1.fetchAll)(query_1.default.FORINSTITUTE, [id]);
    return faculty;
});
let BYID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let faculty = yield (0, postgres_1.fetch)(query_1.default.BYID, [id]);
    return faculty;
});
exports.default = {
    FIRSTBLOCK,
    SECONDBLOCK,
    FORINSTITUTE,
    BYID
};
