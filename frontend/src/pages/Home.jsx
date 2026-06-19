import { useEffect, useState } from "react";
import API from "../api";
import "./Home.css";

export default function Home() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedTour, setSelectedTour] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
  });

  const [search, setSearch] = useState("");

  // FETCH TOURS
  useEffect(() => {
    API.get("/tasks")
      .then((res) => {
        setTours(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("API ERROR:", err);
        setLoading(false);
      });
  }, []);

  // BOOKING FUNCTION
  const handleBooking = async () => {
    try {
      await API.post("/bookings", {
        tourId: selectedTour._id,
        tourTitle: selectedTour.title,
        name: form.name,
        email: form.email,
        date: form.date,
      });

      alert("🎉 Booking Successful!");

      setSelectedTour(null);
      setForm({ name: "", email: "", date: "" });
    } catch (err) {
      console.log("Booking error:", err);
      alert("Booking failed!");
    }
  };

  // FILTER SEARCH
  const filteredTours = tours.filter((t) =>
    `${t.title} ${t.location} ${t.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h2>Loading Tours...</h2>
      </div>
    );
  }

  return (
    <div className="page">

      {/* HERO */}
      <div className="hero">
        <h1>🌍 Explore Amazing Tours</h1>
        <p>Book your next adventure easily</p>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search tours..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {/* GRID */}
      <div className="grid">
        {filteredTours.map((tour) => (
          <div className="card" key={tour._id}>

            {/* IMAGE */}
            <img
              src={tour.image || "https://via.placeholder.com/300"}
              alt={tour.title}
              className="image"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/300")
              }
            />

            {/* PRICE */}
            <div className="price">${tour.price || 0}</div>

            <div className="content">
              <h3>{tour.title}</h3>

              <p className="desc">{tour.description}</p>

              <span className="location">
                📍 {tour.location || "Unknown"}
              </span>

              {/* RATING */}
              <div className="rating">
                <div className="stars">
                  {"★".repeat(Math.round(tour.rating || 0))}
                  {"☆".repeat(5 - Math.round(tour.rating || 0))}
                </div>
                <span className="rating-value">
                  {tour.rating || 0}/5
                </span>
              </div>

              {/* BOOK BUTTON */}
              <button
                className="button"
                onClick={() => setSelectedTour(tour)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedTour && (
        <div className="modal">
          <div className="modal-content">

            <h2>Book {selectedTour.title}</h2>

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <button className="button" onClick={handleBooking}>
              Confirm Booking
            </button>

            <button
              className="button"
              style={{ background: "red" }}
              onClick={() => setSelectedTour(null)}
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
