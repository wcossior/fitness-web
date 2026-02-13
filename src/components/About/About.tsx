import img from '../../assets/dumbells5.jpg'


export const About = () => {
    return (
        <section className='py-12 px-6 md:px-12'>
            <div className='flex gap-8 items-stretch h-[500px]'>
                <div className='flex-[4] h-full bg-red-100'>
                    <img src={img} className='object-cover h-full rounded-xl' alt="img" />
                </div>
                <header className='flex-[3] space-y-4 flex flex-col items-end h-full'>
                    <h2 className="font-bold text-3xl sm:text-4xl font-heading uppercase text-end">You don’t need more motivation. <span className="font-black text-primary/90">You need direction.</span></h2>
                    <p className='text-text-secondary font-body text-end'>I’m Daniel Reyes, a certified fitness coach with over 7 years of experience helping busy professionals build strong, sustainable physiques without extreme diets or burnout.</p>
                    <img src={img} className='object-cover rounded-xl mt-4' alt="img" />
                </header>
            </div>
        </section>
    )
}
