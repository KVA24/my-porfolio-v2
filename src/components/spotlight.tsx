"use client";

import { useEffect } from "react";

export function Spotlight() {
  useEffect(() => {
    let frame = 0;

    function move(event: PointerEvent) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--spotlight-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--spotlight-y", `${event.clientY}px`);
      });
    }

    window.addEventListener("pointermove", move, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div className="spotlight pointer-events-none fixed inset-0 z-30 transition duration-300" />
  );
}
