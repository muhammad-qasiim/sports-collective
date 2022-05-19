
const HowItWorks = () => {

    return (
        <section className="theme-gradient">
            <main className="container mx-auto px-24 lg:px-99 py-99">
                <section className="flex flex-col xl:flex-row items-center gap-6">
                    <div className="w-full mb-32 xl:mb-10">
                        <h3 className="text-40 font-bold mb-10 text-white leading-58">HOW IT WORKS?</h3>
                        <p className="mt-4 text-18 text-gray-50 pr-0 lg:pr-112">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit sapiente quae a quaerat minima, veritatis ea molestias doloribus dignissimos. Eveniet aut, cum molestiae, odit magni repellendus doloremque corrupti, dolore minima inventore provident beatae.                            </p>
                        <div className="flex items-center gap-4 mt-38">
                            <button className="bg-white text-primary font-bold px-32 py-10 rounded-5 transition-all hover:bg-primary hover:text-white relative top-0 hover:top-px" >SIGN UP</button>
                        </div>
                    </div>
                    <div className="w-full">
                        <section className='flex gap-6 mb-24'>
                            <div className="grid place-items-center flex-shrink-0 w-44 h-44 font-bold bg-white text-secondary rounded-full">1</div>
                            <p className='text-gray-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit velit nemo, repellendus ut magni repudiandae tempore in quam, fuga natus vero asperiores culpa voluptas architecto, possimus reprehenderit. Dolore.</p>
                        </section>
                        <section className='flex gap-6 mb-24'>
                            <div className="grid place-items-center flex-shrink-0 w-44 h-44 font-bold bg-white text-secondary rounded-full">2</div>
                            <p className='text-gray-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit velit nemo, repellendus ut magni repudiandae tempore in quam, fuga natus vero asperiores culpa voluptas architecto, possimus reprehenderit. Dolore.</p>
                        </section>
                        <section className='flex gap-6 mb-24'>
                            <div className="grid place-items-center flex-shrink-0 w-44 h-44 font-bold bg-white text-secondary rounded-full">3</div>
                            <p className='text-gray-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit velit nemo, repellendus ut magni repudiandae tempore in quam, fuga natus vero asperiores culpa voluptas architecto, possimus reprehenderit. Dolore.</p>
                        </section>
                    </div>
                </section>
            </main>
        </section>
    )
}

export default HowItWorks;