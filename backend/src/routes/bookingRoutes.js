import express from "express";
import {
  createBooking,
  getBookings,
  deleteBooking,
  getStats
} from "../controllers/bookingController.js";

const router = express.Router();

// CREATE BOOKING
router.post("/", createBooking);

// GET ALL BOOKINGS
router.get("/", getBookings);

// DELETE BOOKING
router.delete("/:id", deleteBooking);

// ADMIN STATS
router.get("/stats", getStats);

export default router;
