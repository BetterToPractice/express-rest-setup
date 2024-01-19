const { User } = require("../user");
const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";

module.exports = new EntitySchema({
    name: "User",
    target: User,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        email: {
            type: "text"
        },
        password: {
            type: "varchar",
        }
    },
});