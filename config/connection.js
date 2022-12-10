const Sequelize = require('sequelize-cockroachdb');
require('dotenv').config();

let sequelize;

if (process.env.DB_URI) {
  sequelize = new Sequelize(process.env.DB_URI);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}


module.exports = sequelize;