"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addUserToSession(req, user) {
    req.session.user = {
        id: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    };
}
exports.default = addUserToSession;
