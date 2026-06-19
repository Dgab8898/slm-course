import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// demo admin (later from DB)
const ADMIN = {
  email: "admin@tour.com",
  password: "admin123",
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN.email) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const isMatch = password === ADMIN.password;

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { email },
    "secret_key",
    { expiresIn: "1h" }
  );

  res.json({ token });
};

// VERIFY MIDDLEWARE
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    jwt.verify(token, "secret_key");
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

