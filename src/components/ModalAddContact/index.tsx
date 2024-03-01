import { Form, Formik } from "formik";
import { InputField } from "../InputField";
import { useModalAddContact } from "./useModalAddContact";

export function ModalAddContact() {
  const { FormSchema, handleFormSubmit, initialValues, submitting } =
    useModalAddContact();

  return (
    <div className="bg-brand-900 w-[20vw] p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-xl mb-4 font-semibold">
        Adicione um novo contato
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <InputField label="Nome" name="name" type="text" />
          <InputField label="Email" name="email" type="email" />
          <InputField label="Telefone" name="phone" type="tel" />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
            disabled={submitting}
          >
            Adicionar
          </button>
        </Form>
      </Formik>
    </div>
  );
}
