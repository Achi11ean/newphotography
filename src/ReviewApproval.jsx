import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ReviewApproval({ token }) {
  const API_BASE = "https://photographybackend-n68z.onrender.com";

  const [reviews, setReviews] = useState([]);

  const loadPending = () => {
    axios
      .get(`${API_BASE}/api/reviews/pending`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadPending();
  }, []);

  const approve = async (id) => {
    await axios.patch(`${API_BASE}/api/reviews/${id}/approve`, null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    loadPending();
  };

  const deleteReview = async (id) => {
    if (!window.confirm("Delete review?")) return;

    await axios.delete(`${API_BASE}/api/reviews/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    loadPending();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-emerald-200">
        Pending Reviews
      </h2>

      {reviews.length === 0 ? (
        <p className="text-emerald-300">No pending reviews.</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-black/20 p-4 rounded-xl border border-emerald-700 shadow-lg"
            >
              <p>
                <strong>{r.reviewer_name}</strong> rated{" "}
                <span className="text-yellow-400">{r.rating}⭐</span>
              </p>
              <p className="text-sm opacity-80 mt-1">{r.comment}</p>

              {r.photo_url && (
                <img
                  src={r.photo_url}
                  alt="Review Photo"
                  className="w-full h-40 mt-3 object-cover rounded-md"
                />
              )}

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => approve(r.id)}
                  className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg"
                >
                  Approve
                </button>
                <button
                  onClick={() => deleteReview(r.id)}
                  className="flex-1 py-2 bg-red-600 hover:bg-red-500 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
