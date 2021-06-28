const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { GiftItem } = require('../../db/models');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const gifts = await GiftItem.findAll();
    return res.json(gifts)
  }),
)

router.get(
    '/camps/giftItems',
    asyncHandler(async (req, res) => {
      const gifts = await GiftItem.findAll();
      return res.json(gifts)
    }),
)
router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res) => {
    const gift = await GiftItems.findByPk(req.params.id)
    return res.json(gift)
}),
)

module.exports = router;
