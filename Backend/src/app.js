import express from "express";
// import { createUser } from "node:http";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dns from "dns";
import connectToSocket from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));
app.use("/api/v1/users", userRoutes);

const start = async () => {
  app.set("mongo_user");
  const connectionDb = await mongoose.connect(
    "mongodb+srv://suchitakhamankar1_db_user:karan123@cluster0.yjl0zl2.mongodb.net/",
  );

  server.listen(app.get("port"), () => {
    console.log("Server is running on port " + app.get("port"));
  });
};

start();
