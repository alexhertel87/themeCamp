const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Reservation } = require('../../db/models')

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const reservations = await Reservation.findAll();
    return res.json(reservations)
  }),
);

router.get(
  '/user/:id',
  asyncHandler(async (req, res) => {
    try {
      const reservations = await Reservation.findAll({
        where: {
          userId: req.params.id
        }
      });
      return res.json(reservations)
    }
    catch (e) {
      console.log("e ---> ", e);
    }
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const reservations = await Reservation.findByPk(req.params.id);
    return res.json(reservations)
  }),
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { userId, campId, reviewId, startDate, endDate } = req.body;
    const reservation = await Reservation.create({ userId, campId, reviewId, startDate, endDate });
    return res.json({
      reservation
    })
  })
);

module.exports = router;
