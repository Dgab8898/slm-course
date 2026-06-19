import { useState } from "react";
import API from "../api";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({});

  // FETCH BOOKINGS
  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // FETCH STATS
  const fetchStats = async () => {
    try {
      const res = await API.get("/bookings/stats");
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE BOOKING
  const deleteBooking = async (id) => {
    try {
      await API.delete(`/bookings/${id}`);
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>🛠 Admin Dashboard</h1>

      {/* LOAD BUTTON */}
      <button
        onClick={() => {
          fetchBookings();
          fetchStats();
        }}
        style={{
          padding: "10px",
          marginBottom: "15px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Load Dashboard Data
      </button>

      {/* STATS */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <div style={boxStyle}>
          📦 Bookings: {stats.totalBookings || 0}
        </div>
        <div style={boxStyle}>
          👤 Users: {stats.users || 0}
        </div>
        <div style={boxStyle}>
          💰 Revenue: ${stats.totalRevenue || 0}
        </div>
      </div>

      {/* BOOKINGS LIST */}
      <div style={{ display: "grid", gap: "10px" }}>
        {bookings.map((b) => (
          <div
            key={b._id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px"
            }}
          >
            <h3>{b.tourTitle}</h3>
            <p>Name: {b.name}</p>
            <p>Email: {b.email}</p>
            <p>Date: {b.date}</p>

            <button
              onClick={() => deleteBooking(b._id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

// STYLE
const boxStyle = {
  padding: "15px",
  background: "#f5f5f5",
  borderRadius: "10px",
  minWidth: "120px",
  textAlign: "center",
  fontWeight: "bold"
};
