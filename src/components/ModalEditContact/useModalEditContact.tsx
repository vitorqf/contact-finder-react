import { useCallback, useState } from "react";
import * as Yup from "yup";
import { Contact } from "../../models/Contact";

interface FormStructure {
  name: string;
  email: string;
  phone: string;
}

const FormSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email("Email inválido"),
  phone: Yup.string().matches(
    /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/gm,
    "Telefone inválido"
  ),
});

export function useModalEditContact({ contact }: { contact: Contact }) {
  const [submitting, setSubmitting] = useState(false);

  const initialValues: FormStructure = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
  };

  const handleFormSubmit = useCallback(async (values: FormStructure) => {
    setSubmitting(true);

    if (!values.name || !values.email || !values.phone) {
      setSubmitting(false);
      return;
    }

    const response = await fetch(
      `http://localhost:3000/contacts/${contact.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    ).then((res) => res.json());

    if (response) {
      window.location.reload();
    }

    setSubmitting(false);
  }, []);

  return { FormSchema, handleFormSubmit, initialValues, submitting };
}
