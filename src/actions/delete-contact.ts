export default async function deleteContact(id: string) {
  return await fetch(`http://localhost:3000/contacts/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
