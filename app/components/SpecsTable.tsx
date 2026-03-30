interface SpecRow {
  label: string;
  value: string;
}

interface SpecsTableProps {
  specs: SpecRow[];
  title?: string;
}

export default function SpecsTable({ specs, title }: SpecsTableProps) {
  return (
    <div className="glass-card overflow-hidden">
      {title && (
        <h3 className="text-lg font-semibold mb-6">{title}</h3>
      )}
      <div className="divide-y divide-white/5">
        {specs.map((spec, i) => (
          <div key={i} className="flex justify-between items-center py-3">
            <span className="text-muted text-sm">{spec.label}</span>
            <span className="spec-value">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
