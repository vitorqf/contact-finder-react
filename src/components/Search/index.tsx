import { ReactNode } from "react";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
}

export function Search({ icon, ...others }: SearchProps) {
  return (
    <div className="bg-brand-800 w-full max-w-[500px]  focus-within:ring-2 focus-within:ring-green-800 flex items-center gap-2 py-2 px-4 rounded-3xl">
      {icon && <span className="text-brand-400">{icon}</span>}
      <input
        type="text"
        className="w-full outline-none placeholder:text-brand-400 transition-colors duration-200 bg-brand-800 text-white"
        {...others}
      />
    </div>
  );
}
