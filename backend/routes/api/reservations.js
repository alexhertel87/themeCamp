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
  '/:id(\\d+)',
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

router.put(
  '/:id(\\d+)',
  asyncHandler(async (req, res, next) => {
    const reservationId = parseInt(req.params.id, 10);
    const reservation = await Reservation.findByPk(reservationId);
    const { start_date, end_date } = req.body;

    if (reservation) {
      await reservation.update({start_date: start_date, end_date: end_date})
      return res.json({reservation});
    } else {
      const reservationNotFoundError = (reservationId) => {
        const error = new Error("Reservation Not Found");
        error.status = 404;
        return error
      }
      next(reservationNotFoundError(reservationId))
    }
  }),
);

router.delete(
  '/user/:id',
  asyncHandler(async(req,res,next) => {
    const id = parseInt(req.params.id, 10);
    console.log("id ---> ", id);
    const reservation = await Reservation.findByPk(id);

    if (reservation) {
      await reservation.destroy();
      return res.json(reservation)
    } else {
      const reservationNotFoundError = (id) => {
        const error = new Error("Reservation Not Found");
        error.status = 404;
        return error
    }
    next(reservationNotFoundError(id));
    }
  })
)

module.exports = router;
