import { useEffect } from "react";

export default function useBodyClass(className, condition) {
  useEffect(() => {
    const { body } = document;
    if (!body || !className) return undefined;

    if (condition) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }

    return () => {
      body.classList.remove(className);
    };
  }, [className, condition]);
}
