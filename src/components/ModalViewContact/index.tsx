import useModal from "../../hooks/useModal";
import { Contact } from "../../models/Contact";

export function ModalViewContact({ contact }: { contact: Contact }) {
  const { handleCloseModal } = useModal();
  return (
    <div className="bg-brand-900 w-[20vw] p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-xl mb-4 font-semibold">
        Detalhes do contato
      </h2>
      <div className="flex flex-col gap-2">
        <span className="text-white">
          <strong>Nome:</strong> {contact.name}
        </span>
        <span className="text-white">
          <strong>Email:</strong> {contact.email}
        </span>
        <span className="text-white">
          <strong>Telefone:</strong> {contact.phone}
        </span>
        <span className="text-white">
          <strong>Criado em:</strong>{" "}
          {new Date(contact.createdAt).toLocaleDateString()}
        </span>
        <button
          onClick={handleCloseModal}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
