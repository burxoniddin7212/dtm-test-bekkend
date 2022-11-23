"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const error_1 = require("./../lib/error");
const validation_1 = require("./../lib/validation");
let validation = (req, res, next) => {
    try {
        if (req.url == '/register' && req.method == 'POST') {
            let { error } = validation_1.registerSchema.validate(req.body);
            if (error)
                next(new error_1.AuthorizatsionError('avtarization error'));
        }
        if (req.url == '/login' && req.method == 'POST') {
            let { error } = validation_1.loginSchema.validate(req.body);
            if (error)
                next(new error_1.AuthorizatsionError('avtarization error'));
        }
        if (req.url == '/institute' && req.method == 'POST') {
            let { error } = validation_1.instituteSchema.validate(req.body);
            if (error)
                next(new error_1.AuthorizatsionError('avtarization error'));
        }
        next();
    }
    catch (error) {
        next(new error_1.InternalServerError('server error'));
    }
};
exports.validation = validation;
