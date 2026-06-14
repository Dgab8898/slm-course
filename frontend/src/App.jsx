import "./App.css";

function App() {
  return (
    <div>
      <header style={styles.nav}>
        <h2>Tour Package System</h2>
        <div>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Tours</a>
          <a href="#" style={styles.link}>Bookings</a>
        </div>
      </header>

      <section style={styles.hero}>
        <h1>Explore Amazing Tour Packages</h1>
        <p>Find the best travel experiences around the world</p>
        <button style={styles.button}>Explore Now</button>
      </section>

      <section style={styles.section}>
        <h2>Featured Packages</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>Bali Adventure</div>
          <div style={styles.card}>Dubai Luxury</div>
          <div style={styles.card}>Paris Romance</div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#222",
    color: "white"
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none"
  },
  hero: {
    textAlign: "center",
    padding: "60px",
    background: "#f4f4f4"
  },
  button: {
    padding: "10px 20px",
    marginTop: "10px",
    background: "blue",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  section: {
    padding: "40px",
    textAlign: "center"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  card: {
    padding: "20px",
    border: "1px solid #ccc",
    width: "150px"
  }
};

export default App;
