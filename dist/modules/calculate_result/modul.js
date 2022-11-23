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
const modul_1 = __importDefault(require("../faculty/modul"));
const model_1 = __importDefault(require("../result/model"));
const postgres_1 = require("../../lib/postgres");
let CALCULATERESULT = (data, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    let first_block = 0;
    let second_block = 0;
    let first_block_mark = 0;
    let second_block_mark = 0;
    let result = yield (0, postgres_1.fetchAll)(query_1.default.GETTESTS, [data.faculty_id]);
    data === null || data === void 0 ? void 0 : data.tests.forEach(info => {
        result === null || result === void 0 ? void 0 : result.forEach((test => {
            if (info.test_id == test.test_id) {
                if (info.test_answer == test.test_answer) {
                    test.first_block == test.science_id ? first_block++ : second_block++;
                }
            }
        }));
    });
    first_block_mark = 3.1 * first_block;
    second_block_mark = 2.1 * second_block;
    first_block_mark ? first_block_mark : first_block_mark = 0;
    second_block_mark ? second_block_mark : second_block_mark = 0;
    let faculty = yield modul_1.default.BYID(data.faculty_id);
    let byudjet = (yield model_1.default.GETBUDJET()) || [];
    let contrakt = yield model_1.default.GETCONTRAKT();
    byudjet.forEach(data => {
        data.total_score = +(data.first_block_ball) + (+data.second_block_ball);
    });
    if (faculty.grands > (byudjet === null || byudjet === void 0 ? void 0 : byudjet.length)) {
        let inserData = yield model_1.default.INSERTRESULT({
            user_id: user_id,
            institue_id: faculty.institue_id || "1",
            faculty_id: faculty.faculty_id || "3",
            first_block_mark: first_block_mark || "0",
            second_block_mark: second_block_mark || "0",
            result_user: "byudjet"
        });
        let insFac = yield (0, postgres_1.fetch)(query_1.default.FACINS, [data.faculty_id]);
        return ({
            first_block, second_block,
            data: insFac,
            result: "byudjet"
        });
    }
    else {
        const closest = byudjet.reduce((acc, loc) => acc.total_score < loc.total_score
            ? acc
            : loc);
        if (closest.total_score < (+(first_block_mark) + (+second_block_mark))) {
            let inserData = yield model_1.default.INSERTRESULT({
                user_id: user_id || "1",
                institue_id: faculty.institue_id || "1",
                faculty_id: faculty.faculty_id || "3",
                first_block_mark: first_block_mark || "0",
                second_block_mark: second_block_mark || "0",
                result_user: "byudjet"
            });
            let resultUpdate = yield model_1.default.UPDATERESULT(closest.result_id);
            let insFac = yield (0, postgres_1.fetch)(query_1.default.FACINS, [data.faculty_id]);
            return ({
                first_block, second_block,
                data: insFac,
                result: "byudjet"
            });
        }
        else {
            let contrakt = (yield model_1.default.GETCONTRAKT()) || [];
            if (faculty.contracts <= contrakt.length) {
                const closest1 = contrakt.reduce((acc, loc) => acc.total_score < loc.total_score
                    ? acc
                    : loc);
                if (closest1.total_score >= (+(first_block_mark) + (+second_block_mark))) {
                    let inserData = yield model_1.default.INSERTRESULT({
                        user_id: user_id || "1",
                        institue_id: faculty.institue_id || "1",
                        faculty_id: faculty.faculty_id || "3",
                        first_block_mark: first_block_mark || "0",
                        second_block_mark: second_block_mark || "0",
                        result_user: "tavsiya etilmadi"
                    });
                    let insFac = yield (0, postgres_1.fetch)(query_1.default.FACINS, [data.faculty_id]);
                    return ({
                        first_block, second_block,
                        data: insFac,
                        result: "tavsiya etilmadi"
                    });
                }
                else {
                    let inserData = yield model_1.default.INSERTRESULT({
                        user_id: user_id || "1",
                        institue_id: faculty.institue_id || "1",
                        faculty_id: faculty.faculty_id || "3",
                        first_block_mark: first_block_mark || "0",
                        second_block_mark: second_block_mark || "0",
                        result_user: "kantrakt"
                    });
                    const closest2 = contrakt.reduce((acc, loc) => acc.total_score < loc.total_score
                        ? acc
                        : loc);
                    let updateRezultT = yield model_1.default.UPDATERESULTT(closest2.result_id);
                    let insFac = yield (0, postgres_1.fetch)(query_1.default.FACINS, [data.faculty_id]);
                    return ({
                        first_block, second_block,
                        data: insFac,
                        result: "kantrakt"
                    });
                }
            }
            else {
                let inserData = yield model_1.default.INSERTRESULT({
                    user_id: user_id || "1",
                    institue_id: faculty.institue_id || "1",
                    faculty_id: faculty.faculty_id || "3",
                    first_block_mark: first_block_mark || "0",
                    second_block_mark: second_block_mark || "0",
                    result_user: "kantrakt"
                });
                let insFac = yield (0, postgres_1.fetch)(query_1.default.FACINS, [data.faculty_id]);
                return ({
                    first_block, second_block,
                    data: insFac,
                    result: "kantrakt"
                });
            }
        }
    }
});
exports.default = {
    CALCULATERESULT
};
