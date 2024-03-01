export function Header({ title }: { title: string }) {
  return (
    <header className="py-3 px-6 border-b-2 border-brand-800">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </header>
  );
}
