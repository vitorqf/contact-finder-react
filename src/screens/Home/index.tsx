import { Sidebar } from "../../components/Sidebar";

export default function Home() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <Sidebar />
      <main className="text-xl">Hello World</main>
    </div>
  );
}
