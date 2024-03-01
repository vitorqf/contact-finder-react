export function ContactCell({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return <td className={`py-2 text-brand-100 ${className}`}>{value}</td>;
}
