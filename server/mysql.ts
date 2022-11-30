import {Sequelize} from 'sequelize'

// dev base: "site", pass: "Admini123-123";
const database = new Sequelize("base", "root", "Admini123-231", {
    host: '127.0.0.1',
	port: 3306,
    dialect: "mariadb"
})

database.authenticate()

// const database = createPool({
//     host: "localhost",
//     user: "root",
//     database: "site",
//     password: "Admini123-123"
// }).promise()

export default database