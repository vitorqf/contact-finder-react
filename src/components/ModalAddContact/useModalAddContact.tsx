import { useCallback, useState } from "react";
import * as Yup from "yup";

interface FormStructure {
  name: string;
  email: string;
  phone: string;
}

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  phone: Yup.string()
    .required("Campo obrigatório")
    .matches(
      /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/gm,
      "Telefone inválido"
    ),
});

export function useModalAddContact() {
  const [submitting, setSubmitting] = useState(false);

  const initialValues: FormStructure = {
    name: "",
    email: "",
    phone: "",
  };

  const handleFormSubmit = useCallback(async (values: FormStructure) => {
    setSubmitting(true);
    const response = await fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());

    if (response) {
      window.location.reload();
    }

    setSubmitting(false);
  }, []);

  return { FormSchema, handleFormSubmit, initialValues, submitting };
}
