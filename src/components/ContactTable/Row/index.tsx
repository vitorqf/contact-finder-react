import { BsThreeDots } from "react-icons/bs";
import { TbPencil, TbTrash } from "react-icons/tb";
import { Contact } from "../../../models/Contact";
import { ContactCell } from "../Cell";
import { useRow } from "./useRow";

export function ContactRow({ contact }: { contact: Contact }) {
  const {
    showActions,
    handleToggleActions,
    handleHideActions,
    handleEditContact,
    handleDeleteContact,
  } = useRow({ contact });
  return (
    <tr className="border-b border-brand-700 hover:bg-brand-700">
      <ContactCell value={contact.name} className="w-96 text-white pl-8" />
      <ContactCell value={contact.email} />
      <ContactCell value={contact.phone} />
      <ContactCell value={contact.createdAt} />
      <td className="py-2 flex flex-col">
        <button
          onClick={handleToggleActions}
          className="relative p-2 w-max border rounded-md border-brand-600 outline-none hover:bg-brand-500  transition-colors duration-250 active:bg-brand-600"
        >
          <BsThreeDots size={20} className="text-brand-100" />

          {showActions && (
            <div
              className="absolute top-0 right-0 w-32 flex flex-col z-10 bg-brand-800 border border-brand-600 rounded-md"
              onMouseLeave={handleHideActions}
            >
              <button
                onClick={handleEditContact}
                className="flex items-center justify-center gap-2 hover:bg-brand-600 p-2 text-brand-100"
              >
                <TbPencil size={20} />
                Editar
              </button>
              <button
                className="flex items-center justify-center gap-2 hover:bg-brand-600 p-2 text-brand-100"
                onClick={handleDeleteContact}
              >
                <TbTrash size={20} />
                Excluir
              </button>
            </div>
          )}
        </button>
      </td>
    </tr>
  );
}
