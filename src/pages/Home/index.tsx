import { BiRefresh } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import { GoPlus } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { ContactTable } from "../../components/ContactTable";
import { CountBadge } from "../../components/CountBadge";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { useHome } from "./useHome";

export default function Home() {
  const {
    loading,
    contacts,
    total,
    fetchData,
    search,
    setSearch,
    handleAddContact,
  } = useHome();

  const handleRefresh = () => {
    if (!loading) {
      fetchData();
    }
  };

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
              <CountBadge
                total={total}
                title={total > 1 ? "contatos" : "contato"}
              />
            </div>

            <div className="mr-2 flex items-center gap-2">
              <button onClick={handleAddContact} className="btn bg-brand-800">
                <GoPlus size={24} className="text-brand-100" />
                <span className="text-brand-100">Adicionar</span>
              </button>

              <button
                onClick={handleRefresh}
                disabled={loading}
                className="btn bg-brand-800"
              >
                {loading ? (
                  <CgSpinner size={24} className="animate-spin" />
                ) : (
                  <BiRefresh size={24} />
                )}
              </button>
            </div>
          </div>

          <div className="max-h-[80vh] h-[80vh] overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-brand-800 scrollbar-thumb-brand-400">
            <ContactTable contacts={contacts} search={search} />
          </div>
        </section>
      </main>
    </div>
  );
}
