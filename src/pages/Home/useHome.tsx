import { useCallback, useEffect, useState } from "react";
import fetchContacts from "../../actions/fetch-contacts";
import { ModalAddContact } from "../../components/ModalAddContact";
import useModal from "../../hooks/useModal";
import { Contact } from "../../models/Contact";

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
    const data: fetchContacts | undefined = await fetchContacts();
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
