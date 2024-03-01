export default async function fetchContacts() {
  return await fetch(`http://localhost:3000/contacts`).then((res) =>
    res.json()
  );
}
