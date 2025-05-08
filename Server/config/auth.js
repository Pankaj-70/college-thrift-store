const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = "your-secret-key"; // Replace with your secret key

async function hashPassword(password) {
  return await bcrypt.hash(password, 12);
}

async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

async function createSession(userId) {
  const token = jwt.sign({ userId }, SECRET, {
    expiresIn: "1d", // Adjust the expiration time as needed
  });
  return { token };
}

module.exports = {
  hashPassword,
  verifyPassword,
  createSession,
};
