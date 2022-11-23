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
exports.fetch = exports.fetchAll = void 0;
const pg_1 = __importDefault(require("pg"));
console.log("deb commection");
const pool = new pg_1.default.Pool({
    user: 'burxoniddin',
    host: 'localhost',
    database: 'dtm_test',
    password: '7212'
});
function fetchAll(SQL, params = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        try {
            const { rows } = yield client.query(SQL, params);
            return rows;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            client.release();
        }
    });
}
exports.fetchAll = fetchAll;
function fetch(SQL, params = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        try {
            const { rows: [row] } = yield client.query(SQL, params);
            return row;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            client.release();
        }
    });
}
exports.fetch = fetch;
console.log("deb commection");
