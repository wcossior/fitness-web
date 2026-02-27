import { UseAbout } from "./UseAbout";

interface CardResultProps {
	value: number;
	suffix: string;
	label: string;
}

export const Metric = ({ value, suffix, label }: CardResultProps) => {

	const numberRef = UseAbout(value);

	return (
		<div className="flex items-center sm:justify-center py-4 px-6">
			<div className="font-body">
				<div className="flex items-end">
					<span ref={numberRef} className="text-5xl font-bold text-primary text-glow">
						{value}
					</span>
					<span className="text-3xl font-bold mr-3 text-primary text-glow">{suffix}</span>
				</div>
				<span className="text-xs uppercase tracking-widest text-text-primary">
					{label}
				</span>
			</div>
		</div>
	);
};
