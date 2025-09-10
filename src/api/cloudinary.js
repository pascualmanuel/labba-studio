// src/api/cloudinary.js
// Minimal helper for unsigned uploads to Cloudinary from the client

export async function uploadImageToCloudinary(file) {
  const cloudName = (process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "").trim();
  const uploadPreset = (
    process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || ""
  ).trim();
  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Cloudinary no está configurado. Define REACT_APP_CLOUDINARY_CLOUD_NAME y REACT_APP_CLOUDINARY_UPLOAD_PRESET"
    );
  }

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", uploadPreset);

  const res = await fetch(endpoint, { method: "POST", body: form });
  const data = await res.json();
  if (!res.ok) {
    const msg = data?.error?.message || `${res.status} ${res.statusText}`;
    throw new Error(`Falló la subida a Cloudinary: ${msg}`);
  }
  if (!data.secure_url) {
    throw new Error("Respuesta de Cloudinary sin secure_url");
  }
  return data.secure_url;
}
