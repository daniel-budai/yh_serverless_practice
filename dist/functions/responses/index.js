"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = successResponse;
exports.errorResponse = errorResponse;
function successResponse(data) {
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
}
function errorResponse(message) {
    return {
        statusCode: 404,
        body: JSON.stringify({ message }),
    };
}
