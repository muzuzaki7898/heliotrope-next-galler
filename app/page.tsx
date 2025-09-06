"use client";
import { useEffect, useState } from "react";
import ImageModal from "./components/ImageModal";

export default function Home() {
  const [images, setImages] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://heliotrope.saebasol.org/api/hitomi/list/0")
      .then((res) => res.json())
      .then(setImages)
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Heliotrope Gallery</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((img: any) => (
          <div
            key={img.id}
            className="cursor-pointer overflow-hidden rounded-lg shadow hover:scale-105 transition"
            onClick={() => setSelected(img.id)}
          >
            <img
              src={img.thumbnail}
              alt={img.title}
              className="w-full h-36 object-cover"
            />
          </div>
        ))}
      </div>

      {selected && images.find((i) => i.id === selected) && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-white rounded p-2"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <img
              src={`https://heliotrope.saebasol.org/api/hitomi/image/${selected}`}
              alt="Full view"
              className="max-h-[80vh] rounded"
            />
          </div>
        </div>
      )}
    </main>
  );
}

