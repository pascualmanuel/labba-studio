import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../api/blogs";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await getBlogs();
        if (mounted) setBlogs(data);
      } catch (e) {
        setError("No se pudo cargar la lista");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p style={{ padding: 16 }}>Cargando...</p>;
  if (error) return <p style={{ padding: 16, color: "red" }}>{error}</p>;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <h1>Blog</h1>
      <div style={{ marginBottom: 12 }}>
        <Link to="/blog/create">Crear nuevo</Link>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {blogs.map((b) => (
          <li
            key={b.id}
            style={{ padding: "12px 0", borderBottom: "1px solid #ddd" }}
          >
            <Link to={`/blog/${b.id}`}>{b.title}</Link>
            <div style={{ fontSize: 12, color: "#666" }}>
              {new Date(b.createdAt).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
