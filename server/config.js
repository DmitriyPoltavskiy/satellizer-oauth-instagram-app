module.exports = {
  db: process.env.db || 'localhost',
  clientSecret: process.env.clientSecret || '61b76657fba04fd2acedf63212f9d1fd',
  tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'
};