
interface CardResultProps {
  value: string;
  suffix: string;
  label: string;
  icon: React.ElementType;
}

export const CardResult = ({ value, suffix, label, icon: IconComponent }: CardResultProps) => {

  return (
    <div className="flex items-center min-w-[280px] py-4 px-12">
      <IconComponent className="h-10 mr-3 text-text-primary"></IconComponent>
      <div className="font-body flex items-center">
        <span className="text-4xl sm:text-5xl font-bold">
          {value}
        </span>
        <span className="text-2xl sm:text-3xl font-bold mr-3">{suffix}</span>
        <span className="text-xs uppercase tracking-widest text-text-primary">
          {label}
        </span>
      </div>
    </div>
  );
};
