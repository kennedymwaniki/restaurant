"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.createUserService = exports.getUserService = exports.usersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const usersService = async () => {
    return await db_1.default.query.usersTable.findMany();
};
exports.usersService = usersService;
//byID
const getUserService = async (id) => {
    return await db_1.default.query.usersTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.usersTable.id, id),
    });
};
exports.getUserService = getUserService;
const createUserService = async (user) => {
    await db_1.default.insert(schema_1.usersTable).values(user);
    return "user created successfully";
};
exports.createUserService = createUserService;
const updateUserService = async (id, user) => {
    await db_1.default.update(schema_1.usersTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.usersTable.id, id));
    return "User updated successfully";
};
exports.updateUserService = updateUserService;
const deleteUserService = async (id) => {
    await db_1.default.delete(schema_1.usersTable).where((0, drizzle_orm_1.eq)(schema_1.usersTable.id, id));
    return "User deleted successfully";
};
exports.deleteUserService = deleteUserService;
