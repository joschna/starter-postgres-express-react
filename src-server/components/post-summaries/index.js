module.exports = (app) => {
  const db = app.get('db');
  const module = {};

  // Get all
  module.get = async () => db.query(`
    select p.title, count(*) from posts p
    group by p.title
    order by p.title
  `);

  return module;
};
