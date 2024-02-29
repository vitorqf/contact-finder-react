import { ReactNode, useEffect, useState } from "react";

export function SidebarButton({
  title,
  path,
  icon,
}: {
  title: string;
  path: string;
  icon: ReactNode;
}) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const isActive = window.location.pathname === path.toLowerCase();
    setActive(isActive);
  }, [path]);
  return (
    <li>
      <button
        className={`w-full h-10 flex items-center px-2 rounded-md transition-colors duration-200 text-white ${
          active
            ? "bg-emerald-700 hover:bg-emerald-800"
            : "bg-neutral-800 hover:bg-neutral-700"
        }`}
      >
        {icon && (
          <span
            className={`mr-3 ${active ? "text-white" : "text-neutral-500"}`}
          >
            {icon}
          </span>
        )}
        <span className="leading-none font-semibold text-neutral-200">
          {title}
        </span>
      </button>
    </li>
  );
}
