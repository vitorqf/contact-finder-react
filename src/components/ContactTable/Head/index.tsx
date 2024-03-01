export function TableHeader() {
  return (
    <thead className="sticky top-0 border-b bg-brand-900 border-brand-700 h-12">
      <tr>
        <th className="text-left text-brand-500 uppercase text-sm pl-8">
          Nome
        </th>
        <th className="text-left text-brand-500 uppercase text-sm">Email</th>
        <th className="text-left text-brand-500 uppercase text-sm">Telefone</th>
        <th className="text-left text-brand-500 uppercase text-sm">
          Criado em
        </th>
        <th></th>
      </tr>
    </thead>
  );
}
