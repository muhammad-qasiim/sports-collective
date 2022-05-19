
const AtheleteCard = ({ children }) => {

    return (

        <div className="my-18 px-14 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
            <article className="overflow-hidden rounded-lg transition-all shadow-lg cursor-pointer">
                <section className="relative">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/800/?random" />
                </section>
                {children}
            </article>
        </div>

    )
}

export default AtheleteCard;