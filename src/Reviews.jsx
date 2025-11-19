import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE =
    import.meta.env.VITE_API_BASE ||
    "https://photographybackend-n68z.onrender.com"; // replace if needed

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/reviews`);
        setReviews(res.data);
      } catch (err) {
        console.error("Failed to load reviews:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const shimmer = (
    <div className="animate-pulse bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl h-48"></div>
  );

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-emerald-900 via-emerald-950 to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-serif italic text-center text-emerald-200 drop-shadow-lg"
      >
        Client Reviews
      </motion.h1>

      {/* Subtext */}
      <p className="text-center text-emerald-300 mt-3 font-light tracking-wide">
        Heartfelt words from real clients ✨
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
        {loading &&
          [...Array(6)].map((_, i) => <div key={i}>{shimmer}</div>)}

        {!loading && reviews.length === 0 && (
          <p className="text-center col-span-full text-emerald-200 text-xl italic">
            No reviews yet — check back soon!
          </p>
        )}

        {!loading &&
          reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-emerald-700 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-shadow"
            >
              {/* Reviewer Photo */}
              {review.photo_url ? (
                <img
                  src={review.photo_url}
                  alt={review.reviewer_name}
                  className="w-full h-40 object-cover rounded-xl shadow-md"
                />
              ) : (
                <div className="w-full h-40 rounded-xl bg-emerald-900/40 border border-emerald-700 flex items-center justify-center text-emerald-300 italic">
                  No Photo Provided
                </div>
              )}

              {/* Reviewer Name */}
              <h2 className="mt-4 text-xl font-bold text-emerald-100">
                {review.reviewer_name}
              </h2>

              {/* Rating */}
              <div className="flex mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    size={20}
                    className={
                      i < review.rating
                        ? "text-amber-400 drop-shadow-md"
                        : "text-gray-500"
                    }
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="mt-3 text-emerald-200 text-sm leading-relaxed">
                {review.comment || "No comment provided."}
              </p>

              {/* Date */}
              <p className="mt-4 text-xs text-emerald-400 italic">
                {new Date(review.created_at).toLocaleDateString()}
              </p>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
