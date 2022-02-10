import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "tester",
    email: "tester@gmail.com",
    password: bcrypt.hashSync("tester", 10),
    isAdmin: true,
  },
  {
    name: "Alex",
    email: "alex@gmail.com",
    password: bcrypt.hashSync("alex123", 10),
  },
];

export default users;
