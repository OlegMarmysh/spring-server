module.exports = {
  development: {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'JKtu27133',
    DB: 'spring',
    dialect: 'postgres'
  },
  production: {
    dialect: 'postgres',
    protocol: 'postgres',
    use_env_variable: 'DATABASE_URL',
    logging: true
  }
}
