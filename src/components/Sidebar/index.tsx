import { RiHome5Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { SidebarButton } from "../SidebarButton";

export function Sidebar() {
  return (
    <aside className="w-60 bg-zinc-800 p-3">
      <nav>
        <ul className="flex flex-col gap-2">
          <SidebarButton
            title="Home"
            path="/"
            icon={<RiHome5Line size={24} />}
          />
          <SidebarButton
            title="Dashboard"
            path="/dashboard"
            icon={<RxDashboard size={24} />}
          />
        </ul>
      </nav>
    </aside>
  );
}
