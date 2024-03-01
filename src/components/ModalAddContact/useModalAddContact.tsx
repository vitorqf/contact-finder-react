import { useCallback, useState } from "react";
import * as Yup from "yup";
import createContact from "../../actions/create-contact";

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

    const res = await createContact(values);

    if (res) {
      window.location.reload();
    }

    setSubmitting(false);
  }, []);

  return { FormSchema, handleFormSubmit, initialValues, submitting };
}
