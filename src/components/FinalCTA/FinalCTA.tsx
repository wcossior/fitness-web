import React from 'react'
import { Button } from '../Buttons/Button'

export const FinalCTA = () => {
    return (
        <section className="py-16 lg:py-32 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs font-heading">
                    Final Protocol
                </span>
                <h2 className="mt-4 mb-6 text-4xl sm:text-5xl md:text-7xl font-heading font-black uppercase italic leading-none">
                    Build a Physique That <br />
                    <span className="text-primary">Commands Respect.</span>
                </h2>
                <p className="mb-10 text-text-secondary font-body max-w-xl mx-auto sm:text-lg">
                    The difference between a plateau and a breakthrough is structure. Your new starting point is one click away.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        title="View Plans"
                        className="bg-primary text-black px-10 py-4 font-bold uppercase tracking-widest"
                        onClick={() => {}} // Función para subir a planes
                    />
                    <Button
                        title="Contact via WhatsApp"
                        variant="ghost"
                        className="border border-white/20 text-white px-10 py-4 font-bold uppercase tracking-widest"
                        onClick={() => window.open('https://wa.me/tunumero', '_blank')}
                    />
                </div>
            </div>
        </section>
    )
}
