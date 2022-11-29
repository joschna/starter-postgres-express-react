const Router = require('express-promise-router');
const PostSummaries = require('../../components/post-summaries');
const auth = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const postSummaries = PostSummaries(app);

  // Get all
  router.get('/', auth.authenticate, async (req, res) => {
    const data = await postSummaries.get();
    res.json(data);
  });

  return Router().use('/post-summaries', router);
};
