// src/api/blogs.js
const API_BASE = (process.env.REACT_APP_API_BASE || "").replace(/\/$/, ""); // sin "/" final

async function toJsonOrThrow(res) {
  if (!res.ok) {
    let err = {};
    try {
      err = await res.json();
    } catch {}
    throw new Error(err.error || `${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getBlogs() {
  const res = await fetch(`${API_BASE}/api/blogs`);
  return toJsonOrThrow(res);
}

export async function getBlogBySlug(slug) {
  if (!slug) throw new Error("slug requerido");
  const res = await fetch(`${API_BASE}/api/blogs/${encodeURIComponent(slug)}`);
  return toJsonOrThrow(res);
}

export async function saveBlog(blog) {
  const res = await fetch(`${API_BASE}/api/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  return toJsonOrThrow(res);
}

export async function getBlogById(id) {
  if (!id) throw new Error("id requerido");
  const res = await fetch(`${API_BASE}/api/blogs/id/${encodeURIComponent(id)}`);
  return toJsonOrThrow(res);
}

export async function updateBlogById(id, blog) {
  if (!id) throw new Error("id requerido");
  const res = await fetch(
    `${API_BASE}/api/blogs/id/${encodeURIComponent(id)}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }
  );
  return toJsonOrThrow(res);
}

export async function deleteBlogById(id) {
  if (!id) throw new Error("id requerido");
  const res = await fetch(
    `${API_BASE}/api/blogs/id/${encodeURIComponent(id)}`,
    {
      method: "DELETE",
    }
  );
  return toJsonOrThrow(res);
}
