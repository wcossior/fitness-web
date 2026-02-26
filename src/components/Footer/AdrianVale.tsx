import { Instagram } from '../../assets/assetsComponents/Instagram'
import { Youtube } from '../../assets/assetsComponents/Youtube'
import { Twitter } from '../../assets/assetsComponents/Twitter'

export const AdrianVale = () => {
    return (
        <div className="lg:col-span-2 space-y-6">
            <h3 className="font-heading font-black text-2xl uppercase">
                Adrian <span className="text-primary">Vale.</span>
            </h3>
            <p className="text-text-secondary font-body max-w-xs text-sm leading-relaxed">
                Performance engineering for intermediate lifters.
                Built on data, driven by results, sustained by structure.
            </p>
            <div className="flex gap-4">
                <a href="#" className="group p-2 border border-white/10 hover:border-primary/50 transition-colors">
                    <Instagram className='h-8 text-text-secondary group-hover:text-primary'></Instagram>
                </a>
                <a href="#" className="group p-2 border border-white/10 hover:border-primary/50 transition-colors">
                    <Youtube className='h-8 text-text-secondary group-hover:text-primary'></Youtube>
                </a>
                <a href="#" className="group p-2 border border-white/10 hover:border-primary/50 transition-colors">
                    <Twitter className='h-8 text-text-secondary group-hover:text-primary'></Twitter>
                </a>
            </div>
        </div>
    )
}
