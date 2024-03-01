import { TbPencil, TbTrash } from "react-icons/tb";

interface ActionsProps {
  handleHideActions: () => void;
  handleEditContact: () => void;
  handleDeleteContact: () => Promise<void>;
}

export function Actions({
  handleHideActions,
  handleEditContact,
  handleDeleteContact,
}: ActionsProps) {
  return (
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
  );
}
