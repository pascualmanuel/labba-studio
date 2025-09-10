/* global dataLayer */

import React, { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    const isStaging =
      String(process.env.REACT_APP_ENV || "").toLowerCase() === "staging" ||
      (process.env.NODE_ENV === "production" &&
        String(process.env.REACT_APP_GIT_BRANCH || "").toLowerCase() ===
          "staging");

    if (isStaging) {
      // Inject noindex meta to prevent indexing even if robots is cached
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, nofollow, noarchive";
      document.head.appendChild(meta);
      return () => {
        document.head.removeChild(meta);
      };
    }
  }, []);

  // If you have GA, disable it on staging by just rendering nothing
  const isStaging =
    String(process.env.REACT_APP_ENV || "").toLowerCase() === "staging" ||
    (process.env.NODE_ENV === "production" &&
      String(process.env.REACT_APP_GIT_BRANCH || "").toLowerCase() ===
        "staging");
  if (isStaging) return null;

  return null; // keep as-is if GA is configured elsewhere
}
