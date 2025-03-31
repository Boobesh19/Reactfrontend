import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// In-memory storage for shipments (this will reset when server restarts)
let shipments = [];

// Sample route
app.get("/", (req, res) => {
  res.send("🚀 Server is running without a database...");
});

// Route to get all shipments
app.get("/api/shipments", (req, res) => {
  res.json(shipments);
});

// Route to create a new shipment
app.post("/api/shipments", (req, res) => {
  const { senderName, receiverName, email, phone, address, packageDetails } = req.body;

  if (!senderName || !receiverName || !email || !phone || !address || !packageDetails) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const newShipment = { id: Date.now(), senderName, receiverName, email, phone, address, packageDetails };
  shipments.push(newShipment);

  res.status(201).json(newShipment);
});

// Route to delete a shipment
app.delete("/api/shipments/:id", (req, res) => {
  const shipmentId = parseInt(req.params.id);
  shipments = shipments.filter((shipment) => shipment.id !== shipmentId);

  res.json({ message: "Shipment deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
