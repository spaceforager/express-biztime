/** Database setup for cats. */
const { Client } = require("pg");

const DB_URI = (process.env.NODE_ENV === "test")
    ? "postgresql:///BizTime_test"
    : "postgresql:///BizTime";

let db = new Client({
    connectionString: DB_URI
});

db.connect();

module.exports = db;