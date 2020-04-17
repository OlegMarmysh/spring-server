module.exports = {
  development: {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'JKtu27133',
    DB: 'spring',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    dialect: 'postgres',
    protocol: 'postgres',
    port: 5432,
    host: 'https://banana-tart-40503.herokuapp.com',
    logging: true
  }
}
