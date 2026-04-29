interface CreditStatCardProps {
  label: string;
  value: string;
  caption: string;
}

export function CreditStatCard({ label, value, caption }: CreditStatCardProps) {
  return (
    <div className="editorial-panel p-6">
      <div className="text-[10px] uppercase tracking-[0.28em] text-[#ffd36e]">{label}</div>
      <div className="mt-3 text-4xl font-light text-white md:text-5xl">{value}</div>
      <div className="mt-2 text-sm text-white/58">{caption}</div>
    </div>
  );
}
