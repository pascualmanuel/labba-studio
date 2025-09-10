import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogs } from "../api/blogs";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await getBlogs();
        const found = data.find((p) => p.id === id);
        if (!found) {
          setError("No se encontró el post");
        } else if (mounted) {
          setPost(found);
        }
      } catch (e) {
        setError("Error cargando el post");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) return <p style={{ padding: 16 }}>Cargando...</p>;
  if (error) return <p style={{ padding: 16, color: "red" }}>{error}</p>;
  if (!post) return null;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <h1>{post.title}</h1>
      {post.coverUrl && (
        <img
          src={post.coverUrl}
          alt="cover"
          style={{ maxWidth: "100%", margin: "12px 0" }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
