"use client";

import { Dispatch, SetStateAction, useState } from "react";
interface ProductImageFieldProps {
  setImage: Dispatch<SetStateAction<string>>;
  initialImage?: string;
}
const ProductImageField = ({
  setImage,
  initialImage,
}: ProductImageFieldProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();

      setImageUrl(data.secure_url);
      setImage(data.secure_url);
      setFileName(file.name);
    } catch (err) {
      setError("Image upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-800">
        Book Cover Image <span className="text-slate-500">(Optional)</span>
      </label>

      <div className="flex flex-col gap-2">
        <input
          type="file"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0] || null;
            setFile(selectedFile);
            setFileName(selectedFile?.name || "");
          }}
        />

        {fileName && (
          <p className="text-sm text-gray-600">Selected file: {fileName}</p>
        )}

        <button
          type="button"
          disabled={loading}
          className="border w-fit px-4 py-1 rounded disabled:opacity-50"
          onClick={handleUpload}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        {error && <p className="text-sm text-red-600">{error}</p>}

        {!imageUrl && initialImage && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-1">Uploaded Image</p>

            <img
              src={initialImage}
              alt="Uploaded book cover"
              className="w-40 rounded border"
            />
          </div>
        )}
        {imageUrl && !loading && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-1">Uploaded Image</p>

            <img
              src={imageUrl}
              alt="Uploaded book cover"
              className="w-40 rounded border"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImageField;
