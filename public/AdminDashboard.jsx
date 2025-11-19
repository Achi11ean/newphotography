import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import GalleryManager from "./GalleryManager";
import ReviewApproval from "./ReviewApproval";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const API_BASE = "https://photographybackend-n68z.onrender.com";
  const token = localStorage.getItem("adminToken");

  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("gallery");
  const [loading, setLoading] = useState(true);

  // Fetch user profile from backend
  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }

    axios
      .get(`${API_BASE}/admin-dashboard`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
      })
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-emerald-900 flex items-center justify-center text-white text-xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-900 to-stone-900 text-white px-6 py-10">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto mb-10 bg-white/10 backdrop-blur-xl border border-emerald-400/40 rounded-2xl p-6 shadow-xl"
      >
        <h1 className="text-4xl md:text-5xl font-serif italic text-emerald-200 text-center drop-shadow-lg">
          Admin Dashboard
        </h1>

        {user && (
          <p className="text-center mt-3 text-lg text-emerald-300">
            Logged in as <span className="font-semibold">{user.username}</span>
          </p>
        )}

        <div className="flex justify-center mt-6">
          <button
            onClick={logout}
            className="px-5 py-2 bg-red-600 hover:bg-red-500 rounded-xl font-bold shadow-md"
          >
            Logout
          </button>
        </div>
      </motion.div>

      {/* TABS */}
      <div className="max-w-5xl mx-auto mb-8 flex justify-center gap-4">
        {[
          { id: "gallery", label: "📸 Gallery Manager" },
          { id: "reviews", label: "⭐ Review Approvals" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-xl font-semibold transition-all 
              ${
                activeTab === tab.id
                  ? "bg-emerald-600 shadow-lg"
                  : "bg-emerald-800/50 hover:bg-emerald-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-6 shadow-xl">
        {activeTab === "gallery" && <GalleryManager token={token} />}

        {activeTab === "reviews" && <ReviewApproval token={token} />}
      </div>
    </div>
  );
}
