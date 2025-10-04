import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css"; // Import CSS

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>

  <div className="admincard">
  <div className="adminimage"></div>
  <div className="card_info">
    <span>ABHISHEK KINAGI</span>
    <p>Support Specialist</p>
  </div>
  <a href="#" className="adminprofilebtn">Folow</a>
</div>

      <div className="dashboard-buttons">
        <button onClick={() => navigate("/admin/add")} className="dashboard-btn add">
          ➕ Add Product
        </button>
        <button onClick={() => navigate("/admin/edit")} className="dashboard-btn edit">
          ✏️ Edit Product
        </button>
        <button onClick={() => navigate("/admin/delete")} className="dashboard-btn delete">
          🗑️ Delete Product
        </button>
      </div>

      <p className="dashboard-footer">
        Manage your products efficiently and safely.
      </p>
    </div>
  );
};

export default AdminDashboard;
