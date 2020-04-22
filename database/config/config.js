module.exports = {
  development: {
    host: '127.0.0.1',
    username: 'postgres',
    password: 'JKtu27133',
    database: 'spring',
    port: 5432,
    dialect: 'postgres'
  },
  production: {
    dialect: 'postgres',
    protocol: 'postgres',
    use_env_variable: 'DATABASE_URL',
    logging: false
  }
}