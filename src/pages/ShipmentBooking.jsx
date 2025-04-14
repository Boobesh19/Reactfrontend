import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Edit, Trash2, PlusCircle } from "lucide-react";
import "./SBooking.css";

const shipmentSchema = z.object({
  senderName: z.string().min(2, "Sender's name must be at least 2 characters"),
  receiverName: z.string().min(2, "Receiver's name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits").max(12, "Max 12 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  packageDetails: z.string().min(5, "Please provide package details"),
});

function ShipmentBooking() {
  const [shipments, setShipments] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ resolver: zodResolver(shipmentSchema) });

  const fetchShipments = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://reactbackend-fj7o.onrender.com/api/shipments");
      const data = await response.json();
      setShipments(data);
    } catch (error) {
      console.error("❌ Failed to fetch shipments", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  const onSubmit = async (data) => {
    try {
      const method = editId ? "PUT" : "POST";
      const url = editId
        ? `https://reactbackend-fj7o.onrender.com/api/shipments/${editId}`
        : "https://reactbackend-fj7o.onrender.com/api/shipments";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      await fetchShipments();
      reset();
      setEditId(null);
      setShowForm(false);
    } catch (err) {
      console.error("❌ Error submitting shipment:", err);
    }
  };

  const handleEdit = (shipment) => {
    for (const [key, value] of Object.entries(shipment)) {
      if (key in shipmentSchema.shape) {
        setValue(key, value);
      }
    }
    setEditId(shipment._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this shipment?")) return;
    try {
      await fetch(`https://reactbackend-fj7o.onrender.com/api/shipments/${id}`, {
        method: "DELETE",
      });
      await fetchShipments();
    } catch (err) {
      console.error("❌ Error deleting shipment:", err);
    }
  };

  const openNewForm = () => {
    reset();
    setEditId(null);
    setShowForm(true);
  };

  return (
    <section className="shipment-container">
      <h2>Booked Shipments</h2>
      <button className="new-booking-btn" onClick={openNewForm}>
        <PlusCircle size={18} /> Book New Shipment
      </button>

      {loading ? (
        <p>Loading shipments...</p>
      ) : (
        <ul className="shipment-list">
          {shipments.map((shipment) => (
            <li key={shipment._id} className="shipment-item">
              <div className="shipment-info">
                <strong>Sender:</strong> {shipment.senderName}<br />
                <strong>Receiver:</strong> {shipment.receiverName}<br />
                <strong>Email:</strong> {shipment.email}<br />
                <strong>Phone:</strong> {shipment.phone}<br />
                <strong>Address:</strong> {shipment.address}<br />
                <strong>Package:</strong> {shipment.packageDetails}<br />
              </div>
              <div className="shipment-actions">
                <button onClick={() => handleEdit(shipment)} className="edit-btn">
                  <Edit size={18} />
                </button>
                <button onClick={() => handleDelete(shipment._id)} className="delete-btn">
                  <Trash2 size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editId ? "Edit Shipment" : "New Shipment"}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Sender's Name</label>
              <input {...register("senderName")} placeholder="John Doe" />
              {errors.senderName && <p className="error">{errors.senderName.message}</p>}

              <label>Receiver's Name</label>
              <input {...register("receiverName")} placeholder="Jane Doe" />
              {errors.receiverName && <p className="error">{errors.receiverName.message}</p>}

              <label>Email</label>
              <input type="email" {...register("email")} placeholder="example@mail.com" />
              {errors.email && <p className="error">{errors.email.message}</p>}

              <label>Phone Number</label>
              <input type="tel" {...register("phone")} placeholder="1234567890" />
              {errors.phone && <p className="error">{errors.phone.message}</p>}

              <label>Address</label>
              <textarea {...register("address")} placeholder="Street, City, Zip Code" />
              {errors.address && <p className="error">{errors.address.message}</p>}

              <label>Package Details</label>
              <textarea {...register("packageDetails")} placeholder="Describe your package" />
              {errors.packageDetails && <p className="error">{errors.packageDetails.message}</p>}

              <div className="form-actions">
                <button type="submit">{editId ? "Update Shipment" : "Book Shipment"}</button>
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default ShipmentBooking;