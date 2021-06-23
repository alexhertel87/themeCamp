const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Camp } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
      const camps = await Camp.findAll({ limit: 30, order: [['id', 'DESC']] });
      return res.json(camps)
    }),
)

router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
      const camp = await Camp.findByPk(req.params.id)
      return res.json(camp)
  }),
)

module.exports = router;
