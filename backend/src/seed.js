import mongoose from "mongoose";
import dotenv from "dotenv";
import Booking from "./models/Booking.js";

dotenv.config();

// CONNECT DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected for Seeding"))
  .catch((err) => {
    console.log("DB Error:", err);
    process.exit(1);
  });

// TEST DATA
const seedBookings = [
  {
    name: "John Doe",
    email: "john@example.com",
    tourTitle: "Tokyo Explorer",
    tourId: "TOKYO001",
    date: new Date(),
  },
  {
    name: "Sarah Smith",
    email: "sarah@example.com",
    tourTitle: "Bali Escape",
    tourId: "BALI002",
    date: new Date(),
  },
  {
    name: "David Johnson",
    email: "david@example.com",
    tourTitle: "Maldives Paradise",
    tourId: "MALDIVES003",
    date: new Date(),
  },
];

// SEED FUNCTION
const seedDB = async () => {
  try {
    await Booking.deleteMany();
    await Booking.insertMany(seedBookings);

    console.log("🌱 TEST BOOKINGS INSERTED SUCCESSFULLY");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedDB();

