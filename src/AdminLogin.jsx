import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const API_BASE = "https://photographybackend-n68z.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await axios.post(`${API_BASE}/signin`, {
        username,
        password,
      });

      // Save token
      localStorage.setItem("adminToken", response.data.token);

      // Redirect to dashboard
      navigate("/admin-dashboard");
    } catch (error) {
      setErrorMsg(
        error.response?.data?.error || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-900 to-stone-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/10 border border-emerald-400/40 backdrop-blur-xl p-8 rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <h1 className="text-center text-4xl md:text-5xl font-serif italic text-emerald-200 tracking-widest drop-shadow-lg">
          Admin Login
        </h1>
        <hr className="border-emerald-400 w-1/3 mx-auto my-4" />

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-400 text-center mb-4 font-semibold">
            {errorMsg}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          {/* Username */}
          <div>
            <label className="block text-emerald-200 mb-1 font-semibold">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-xl bg-emerald-900/60 text-white border border-emerald-500 focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-emerald-200 mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl bg-emerald-900/60 text-white border border-emerald-500 focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold text-lg text-white shadow-lg transition"
          >
            {isLoading ? "Signing in..." : "Login"}
          </motion.button>
        </form>

        {/* Forgot Password */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/forgot-password")}
            className="text-emerald-300 hover:text-emerald-100 underline text-sm"
          >
            Forgot your password?
          </button>
        </div>
      </motion.div>
    </div>
  );
}
