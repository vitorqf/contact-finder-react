import { useCallback, useState } from "react";
import useModal from "../../../hooks/useModal";
import { Contact } from "../../../models/Contact";
import { ModalEditContact } from "../../ModalEditContact";

export function useRow({ contact }: { contact: Contact }) {
  const [showActions, setShowActions] = useState(false);
  const { setModalContent } = useModal();

  const handleHideActions = useCallback(() => {
    setShowActions(false);
  }, []);

  const handleToggleActions = useCallback(() => {
    setShowActions((prev) => !prev);
  }, []);

  const handleEditContact = useCallback(() => {
    handleHideActions();
    setModalContent(<ModalEditContact contact={contact} />);
  }, [contact, setModalContent, handleHideActions]);

  const handleDeleteContact = useCallback(async () => {
    const ok = confirm("Deseja realmente excluir este contato?");
    if (!ok) return;

    handleHideActions();
    const response = await fetch(
      `http://localhost:3000/contacts/${contact.id}`,
      {
        method: "DELETE",
      }
    ).then((res) => res.json());

    if (response) {
      window.location.reload();
    }
  }, [contact, handleHideActions]);

  return {
    showActions,
    handleToggleActions,
    handleHideActions,
    handleEditContact,
    handleDeleteContact,
  };
}
