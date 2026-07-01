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
    const sections = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.5, 0.9] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
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
                    "text-xs font-bold text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
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
