import { BiRefresh } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { useHome } from "./useHome";

export default function Home() {
  const { loading, contacts, total, fetchData } = useHome();
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <Sidebar />
      <main className="text-xl bg-brand-900 w-full">
        <header className="p-6 border-b-2 border-brand-800">
          <h1 className="text-2xl font-bold text-white">Home</h1>
        </header>

        <section className="py-6 flex flex-col gap-4 overflow-hidden box-border">
          <div className="ml-6 flex items-center gap-4 pr-6">
            <div className="flex items-center gap-4 flex-1">
              <Search
                placeholder="Buscar por nome, email ou telefone"
                icon={<IoSearchSharp size={24} />}
              />

              <span className="p-1 px-2 text-brand-100 text-sm rounded-md border bg-brand-800 border-brand-400 whitespace-nowrap">
                {total} contatos
              </span>
            </div>
            <button
              onClick={fetchData}
              disabled={loading}
              className="bg-brand-800 h-10 w-32 gap-1 text-brand-100 border border-brand-400 flex items-center justify-center rounded-md hover:bg-brand-600 hover:text-white transition-colors duration-250 disabled:cursor-not-allowed"
            >
              {loading ? (
                <CgSpinner size={24} className="animate-spin" />
              ) : (
                <>
                  <BiRefresh size={24} />
                  <span>Atualizar</span>
                </>
              )}
            </button>
          </div>

          <div className="max-h-[80vh] overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-brand-800 scrollbar-thumb-brand-400">
            <table className="ml-1 w-full">
              <thead className="sticky top-0 border-b bg-brand-900 border-brand-600 h-12">
                <tr>
                  <th className="text-left text-brand-500 uppercase text-sm pl-8">
                    Nome
                  </th>
                  <th className="text-left text-brand-500 uppercase text-sm">
                    Email
                  </th>
                  <th className="text-left text-brand-500 uppercase text-sm">
                    Telefone
                  </th>
                  <th className="text-left text-brand-500 uppercase text-sm">
                    Criado em
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr
                    key={contact.email}
                    className="border-b border-brand-600 hover:bg-brand-700"
                  >
                    <td className="w-96 text-white pl-8">{contact.name}</td>
                    <td className="text-brand-100">{contact.email}</td>
                    <td className="text-brand-100">{contact.phone}</td>
                    <td className="text-brand-100">{contact.createdAt}</td>
                    <td className="flex flex-col">
                      <button>Editar</button>
                      <button>Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
