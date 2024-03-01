import { useCallback, useEffect, useState } from "react";
import { ModalAddContact } from "../../components/ModalAddContact";
import useModal from "../../hooks/useModal";
import { Contact } from "../../models/Contact";

async function getContacts() {
  try {
    const { results, total }: { results: Contact[]; total: number } =
      await fetch("http://localhost:3000/contacts").then((res) => res.json());
    return { results, total };
  } catch (err) {
    console.error(err);
  }
}

interface fetchContacts {
  results: Contact[];
  total: number;
}

export function useHome() {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const { setModalContent } = useModal();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data: fetchContacts | undefined = await getContacts();
    if (data) {
      setContacts(data.results);
      setTotal(data.total);
    }
    setLoading(false);
  }, []);

  const handleAddContact = useCallback(() => {
    setModalContent(<ModalAddContact />);
  }, [setModalContent]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    contacts,
    total,
    fetchData,
    search,
    setSearch,
    handleAddContact,
  };
}
