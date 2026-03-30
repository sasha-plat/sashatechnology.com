interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-card group hover:scale-[1.02] transition-transform duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
