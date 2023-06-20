"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleAllowOrigin(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}
exports.default = handleAllowOrigin;
