import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GalleryManager({ token }) {
  const API_BASE = "https://photographybackend-n68z.onrender.com";

  const [photos, setPhotos] = useState([]);
  const [newPhoto, setNewPhoto] = useState({
    image_url: "",
    caption: "",
    category: "",
    photo_type: "",
  });

  const loadPhotos = () => {
    axios
      .get(`${API_BASE}/api/gallery`)
      .then((res) => setPhotos(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  const uploadPhoto = async () => {
    try {
      await axios.post(`${API_BASE}/api/gallery/upload`, newPhoto, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setNewPhoto({ image_url: "", caption: "", category: "", photo_type: "" });
      loadPhotos();
    } catch (error) {
      console.error(error);
      alert("Failed to upload photo");
    }
  };

  const deletePhoto = async (id) => {
    if (!window.confirm("Delete this photo?")) return;

    await axios.delete(`${API_BASE}/api/gallery/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    loadPhotos();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-emerald-200">
        Add a New Photo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {["image_url", "caption", "category", "photo_type"].map((field) => (
          <input
            key={field}
            placeholder={field.replace("_", " ")}
            value={newPhoto[field]}
            onChange={(e) =>
              setNewPhoto({ ...newPhoto, [field]: e.target.value })
            }
            className="p-3 rounded-lg bg-emerald-900/50 border border-emerald-600 text-white"
          />
        ))}
      </div>

      <button
        onClick={uploadPhoto}
        className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold"
      >
        Upload Photo
      </button>

      <hr className="my-8 border-emerald-500" />

      <h2 className="text-2xl font-bold mb-4 text-emerald-200">
        Current Gallery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((p) => (
          <div
            key={p.id}
            className="bg-black/20 rounded-xl p-4 shadow-lg border border-emerald-700"
          >
            <img
              src={p.image_url}
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="mt-2 text-sm text-emerald-200">{p.caption}</p>
            <button
              onClick={() => deletePhoto(p.id)}
              className="mt-3 w-full bg-red-600 hover:bg-red-500 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
