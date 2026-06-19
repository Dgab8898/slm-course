import Booking from "../models/Booking.js";

// CREATE BOOKING
const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.status(201).json({
      message: "Booking successful",
      booking,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET BOOKINGS
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE BOOKING
const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);

    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// STATS
const getStats = async (req, res) => {
  try {
    const bookings = await Booking.find();

    const totalBookings = bookings.length;
    const totalRevenue = totalBookings * 500;
    const users = new Set(bookings.map(b => b.email)).size;

    res.json({
      totalBookings,
      totalRevenue,
      users
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// EXPORT ALL (IMPORTANT FIX)
export {
  createBooking,
  getBookings,
  deleteBooking,
  getStats
};
