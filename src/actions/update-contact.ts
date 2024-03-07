import { API_URL } from "../constants";
import { Contact } from "../models/Contact";

export default async function updateContact(
  id: string,
  contact: Partial<Contact>
): Promise<Contact> {
  return await fetch(`${API_URL}/contacts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  }).then((res) => res.json());
}
