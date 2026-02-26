import { AdrianVale } from "./AdrianVale"
import { SystemMap } from "./SystemMap"
import { SystemStatus } from "./SystemStatus"


export const Footer = () => {
	return (
		<footer className="bg-surface border-t border-white/5 py-16 lg:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
			<div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

			<div className="max-w-7xl mx-auto">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					<AdrianVale></AdrianVale>

					<SystemMap></SystemMap>

					<SystemStatus></SystemStatus>
				</div>

				<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">
						© 2026 Adrian Vale // All Rights Reserved
					</p>

					<div className="flex gap-6 text-[10px] font-mono uppercase text-text-secondary">
						<a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
						<a href="#" className="hover:text-white transition-colors">Terms of Service</a>
					</div>
				</div>
			</div>
		</footer>
	)
}