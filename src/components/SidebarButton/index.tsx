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
        className={`w-full h-12 flex items-center px-2 rounded-lg transition-colors duration-200 text-white ${
          active
            ? "bg-emerald-700 hover:bg-emerald-800"
            : "bg-brand-800 hover:bg-brand-700"
        }`}
      >
        {icon && (
          <span className={`mr-3 ${active ? "text-white" : "text-brand-500"}`}>
            {icon}
          </span>
        )}
        <span className="leading-none font-semibold text-white">{title}</span>
      </button>
    </li>
  );
}
