import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    // (Synchronous) Returns the JsonWebToken as string
    expiresIn: "30d",
  });
};

export default generateToken;
