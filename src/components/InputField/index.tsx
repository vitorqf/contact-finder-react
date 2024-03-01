import { ErrorMessage, Field, useField } from "formik";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export function InputField({ label, name, ...others }: InputFieldProps) {
  const [field] = useField(name);
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 text-white">
        {label}
      </label>
      <Field
        className="w-full bg-brand-800 text-white rounded-md py-2 px-4 outline-none focus:ring-2 focus:ring-green-800"
        value={field.value}
        name={name}
        onChange={field.onChange}
        {...others}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
}
