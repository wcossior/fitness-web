
interface CardResultProps {
  value: string;
  suffix: string;
  label: string;
  icon: React.ElementType;
}

export const CardResult = ({ value, suffix, label }: CardResultProps) => {

  return (
    <div className="flex items-center min-w-[280px] justify-center py-4 px-8">
      <div className="font-body">
        <div className="flex items-end justify-center">
          <span className="text-4xl sm:text-5xl font-bold text-primary">
            {value}
          </span>
          <span className="text-2xl sm:text-3xl font-bold mr-3 text-primary">{suffix}</span>
        </div>
        <span className="text-xs uppercase tracking-widest text-text-primary">
          {label}
        </span>
      </div>
    </div>
  );
};
