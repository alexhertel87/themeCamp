const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { GiftItem } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
      const giftItems = await GiftItem.findAll();
      return res.json(giftItems)
    }),
  )

module.exports = router;
