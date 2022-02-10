import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Tester1",
    email: "tester@gmail.com",
    password: bcrypt.hashSync("tester", 10),
    isAdmin: true,
  },
  {
    name: "Alex",
    email: "alex@gmail.com",
    password: bcrypt.hashSync("alex", 10),
  },
];

export default users;
