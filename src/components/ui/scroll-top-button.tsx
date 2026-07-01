"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > window.innerHeight);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      aria-label="Back to top"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-300 shadow-lg shadow-slate-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-teal-300/60 hover:text-teal-300 motion-reduce:transition-none cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
