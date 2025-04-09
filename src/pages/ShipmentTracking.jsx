import React, { useState } from "react";

const ShipmentTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!trackingNumber.trim()) {
      alert("Please enter a tracking number.");
      return;
    }

    // Dummy tracking data
    setTrackingResult({
      trackingNumber,
      status: "📦 In Transit",
      estimatedDelivery: "🗓️ April 5 - April 7, 2025",
      currentLocation: "📍 Delhi Hub",
      lastUpdated: "🕓 March 29, 2025 - 2:45 PM",
    });
  };

  return (
    <div className="ST-container" style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          required
          style={{
            padding: "0.5rem",
            width: "100%",
            marginBottom: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Track
        </button>
      </form>

      {trackingResult && (
        <div
          className="tracking-result"
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #eee",
            borderRadius: "6px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>📦 Tracking Details</h3>
          <p><strong>Tracking Number:</strong> {trackingResult.trackingNumber}</p>
          <p><strong>Status:</strong> {trackingResult.status}</p>
          <p><strong>Estimated Delivery:</strong> {trackingResult.estimatedDelivery}</p>
          <p><strong>Current Location:</strong> {trackingResult.currentLocation}</p>
          <p><strong>Last Updated:</strong> {trackingResult.lastUpdated}</p>
        </div>
      )}
    </div>
  );
};

export default ShipmentTracking;
