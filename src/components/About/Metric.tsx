
interface CardResultProps {
  value: string;
  suffix: string;
  label: string;
}

export const Metric = ({ value, suffix, label }: CardResultProps) => {

  return (
    <div className="flex items-center sm:justify-center py-4 px-6">
      <div className="font-body">
        <div className="flex items-end">
          <span className="text-5xl font-bold text-primary">
            {value}
          </span>
          <span className="text-3xl font-bold mr-3 text-primary">{suffix}</span>
        </div>
        <span className="text-xs uppercase tracking-widest text-text-primary">
          {label}
        </span>
      </div>
    </div>
  );
};
