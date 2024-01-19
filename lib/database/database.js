const typeorm = require("typeorm");
const path = require("path");

const dataSource = new typeorm.DataSource({
    type: "sqlite",
    database: path.join(__dirname, "../../database.sqlite"),
    entities: [
        path.join(__dirname, "../../models/schemas/*.js")
    ],
    migrations: [
        path.join(__dirname, "../../migrations/*.js")
    ]
});

module.exports = dataSource;