import { IoNotificationsOutline } from "react-icons/io5";
import { RiHome5Line } from "react-icons/ri";
import { SidebarButton } from "../SidebarButton";

export function Sidebar() {
  return (
    <aside className="w-80 bg-brand-800 p-3 flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">FINDER</h1>
        <IoNotificationsOutline size={24} color="white" />
      </div>
      <nav>
        <ul className="flex flex-col gap-2">
          <SidebarButton
            title="Home"
            path="/"
            icon={<RiHome5Line size={24} />}
          />
        </ul>
      </nav>
    </aside>
  );
}
