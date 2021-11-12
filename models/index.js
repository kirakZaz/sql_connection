import path from "path";
import Sequelize from "sequelize";
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config.json")[env];
const db = {};



const sequelize = new Sequelize('postgres://postgres:robopass@localhost:5432/postgres')

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});


// // read sync files
// fs
//     .readdirSync(__dirname)
//     .filter(
//         file =>
//             file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     )
//     .forEach(file => {
//         const model = sequelize.import(path.join(__dirname, file));
//         db[model.name] = model;
//     });
//
// //associate
// Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//         db[modelName].associate(db);
//     }
// });
//
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;