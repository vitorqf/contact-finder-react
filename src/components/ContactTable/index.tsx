import { Contact } from "../../models/Contact";
import { TableHeader } from "./Head";
import { ContactRow } from "./Row";

export function ContactTable({
  contacts,
  search,
}: {
  contacts: Contact[];
  search: string;
}) {
  return (
    <table className="ml-1 w-full">
      <TableHeader />
      <tbody>
        {contacts
          .filter(
            (contact) =>
              contact.name.toLowerCase().includes(search.toLowerCase()) ||
              contact.email.toLowerCase().includes(search.toLowerCase()) ||
              contact.phone.toLowerCase().includes(search.toLowerCase())
          )
          .map((contact) => (
            <ContactRow key={contact.email} contact={contact} />
          ))}
      </tbody>
    </table>
  );
}
