import { Contact } from "../models/Contact";

export default async function createContact(
  contact: Partial<Contact>
): Promise<Contact> {
  return await fetch(`http://localhost:3000/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  }).then((res) => res.json());
}
