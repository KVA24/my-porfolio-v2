"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

export function InPageNav({ items }: { items: NavItem[] }) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");

  useEffect(() => {
    let frame = 0;

    function updateActiveSection() {
      frame = 0;

      const marker = window.scrollY + window.innerHeight * 0.35;
      const current =
        items.reduce((active, item) => {
          const section = document.getElementById(item.href.slice(1));
          return section && section.offsetTop <= marker ? item.href : active;
        }, items[0]?.href ?? "") || items[0]?.href;

      setActiveHref((active) => (active === current ? active : current));
    }

    function scheduleUpdate() {
      if (frame === 0) frame = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [items]);

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {items.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <li key={item.href}>
              <a className="group flex items-center py-3" href={item.href}>
                <span
                  className={cn(
                    "mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                    isActive && "w-16 bg-slate-200",
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                    isActive && "text-slate-200",
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
