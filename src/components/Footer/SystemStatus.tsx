
export const SystemStatus = () => {
    return (
        <div className="space-y-6">
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-white">System Status</h4>
            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[10px] font-mono uppercase text-primary">Core Active</span>
                </div>
                <p className="text-[10px] font-mono text-text-secondary uppercase leading-tight">
                    v2.4.0 // Build 2026<br />
                    Global Uplink: Online
                </p>
            </div>
        </div>
    )
}
