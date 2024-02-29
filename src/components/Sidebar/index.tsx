import { SidebarButton } from "../SidebarButton";

export function Sidebar() {
  return (
    <aside className="w-60 bg-zinc-800">
      <nav>
        <ul>
          <SidebarButton title="Home" path="/" />
          <SidebarButton title="Dashboard" path="/dashboard" />
        </ul>
      </nav>
    </aside>
  );
}
