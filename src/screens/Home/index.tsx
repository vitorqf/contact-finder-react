import { BiRefresh } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { ContactTable } from "../../components/ContactTable";
import { CountBadge } from "../../components/CountBadge";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { useHome } from "./useHome";

export default function Home() {
  const { loading, contacts, total, fetchData, search, setSearch } = useHome();
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <Sidebar />
      <main className="text-xl bg-brand-900 w-full">
        <Header title="Home" />

        <section className="py-6 flex flex-col gap-4 overflow-hidden box-border">
          <div className="ml-6 flex items-center gap-4 pr-6">
            <div className="flex items-center gap-4 flex-1">
              <Search
                placeholder="Buscar por nome, email ou telefone"
                icon={<IoSearchSharp size={24} />}
                inputValue={search}
                setInputValue={setSearch}
              />

              <CountBadge total={total} title="contatos" />
            </div>
            <button
              onClick={fetchData}
              disabled={loading}
              className="bg-brand-800 h-10 w-36 px-3 gap-2 text-brand-100 border border-brand-400 flex items-center justify-center rounded-md hover:bg-brand-600 hover:text-white transition-colors duration-250 disabled:cursor-not-allowed"
            >
              {loading ? (
                <CgSpinner size={24} className="animate-spin" />
              ) : (
                <>
                  <BiRefresh size={24} />
                  <span className="font-semibold">Atualizar</span>
                </>
              )}
            </button>
          </div>

          <div className="max-h-[80vh] h-[80vh] overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-brand-800 scrollbar-thumb-brand-400">
            <ContactTable contacts={contacts} search={search} />
          </div>
        </section>
      </main>
    </div>
  );
}
