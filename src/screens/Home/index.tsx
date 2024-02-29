import { IoSearchSharp } from "react-icons/io5";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";

export default function Home() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <Sidebar />
      <main className="text-xl bg-neutral-900 w-full">
        <header className="p-6 border-b-2 border-neutral-800">
          <h1 className="text-2xl font-bold text-white">Home</h1>
        </header>

        <section className="p-6">
          <Search
            placeholder="Buscar por nome, email ou telefone"
            icon={<IoSearchSharp size={24} />}
          />
        </section>
      </main>
    </div>
  );
}
