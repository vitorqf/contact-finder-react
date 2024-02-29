import { useEffect, useState } from "react";

export function SidebarButton({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const isActive = window.location.pathname === path.toLowerCase();
    setActive(isActive);
  }, [path]);
  return (
    <li>
      <button
        className={`w-full h-10 flex items-center px-2 bg-zinc-800  hover:bg-zinc-700 transition-colors duration-200 text-white ${
          active ? "bg-emerald-700 hover:bg-emerald-800" : ""
        }`}
      >
        {title}
      </button>
    </li>
  );
}
