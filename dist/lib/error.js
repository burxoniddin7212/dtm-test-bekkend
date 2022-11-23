"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedRequestError = exports.InternalServerError = exports.ForbiddineError = exports.AuthorizatsionError = void 0;
class AuthorizatsionError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.message = message,
            this.name = 'AuthorizatsionError',
            this.status = 401;
    }
}
exports.AuthorizatsionError = AuthorizatsionError;
class ForbiddineError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.message = message,
            this.name = 'ForbiddineError',
            this.status = 403;
    }
}
exports.ForbiddineError = ForbiddineError;
class InternalServerError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.message = message,
            this.name = 'InternalServerError',
            this.status = 500;
    }
}
exports.InternalServerError = InternalServerError;
class BedRequestError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.message = message,
            this.name = 'BedRequestError',
            this.status = 400;
    }
}
exports.BedRequestError = BedRequestError;
