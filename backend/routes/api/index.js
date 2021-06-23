// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');

// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const campsRouter = require('./camps.js')
const reserveRouter = require('./reservations.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/camps', campsRouter);
router.use('/reservations', reserveRouter);


const { User } = require('../../db/models');
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);http://localhost:5000/api/require-authhttp://localhost:5000/api/require-auth

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
