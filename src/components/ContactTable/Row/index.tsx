import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import { Contact } from "../../../models/Contact";
import { Actions } from "../Actions";
import { ContactCell } from "../Cell";
import { useRow } from "./useRow";

export function ContactRow({ contact }: { contact: Contact }) {
  const {
    showActions,
    handleToggleActions,
    handleHideActions,
    handleEditContact,
    handleDeleteContact,
    handleDetailContact,
  } = useRow({ contact });
  return (
    <tr className="border-b border-brand-700 hover:bg-brand-700">
      <ContactCell value={contact.name} className="w-96 text-white pl-8" />
      <ContactCell value={contact.email} />
      <ContactCell value={contact.phone} />
      <ContactCell value={moment(contact.createdAt).format("DD/MM/yyyy")} />
      <td className="py-2 flex flex-col">
        <button
          onClick={handleToggleActions}
          className="relative p-2 w-max border rounded-md border-brand-600 outline-none hover:bg-brand-500  transition-colors duration-250 active:bg-brand-600"
        >
          <BsThreeDots size={20} className="text-brand-100" />

          {showActions && (
            <Actions
              handleHideActions={handleHideActions}
              handleEditContact={handleEditContact}
              handleDeleteContact={handleDeleteContact}
              handleDetailContact={handleDetailContact}
            />
          )}
        </button>
      </td>
    </tr>
  );
}
