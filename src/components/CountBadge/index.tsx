export function CountBadge({ total, title }: { total: number; title: string }) {
  return (
    <span className="p-1 px-2 text-brand-100 text-sm rounded-md border bg-brand-800 border-brand-400 whitespace-nowrap">
      {total} {title}
    </span>
  );
}
