
const Collection = ({ category }) => {

    return (

        <div class="my-18 px-14 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
            <article class="overflow-hidden rounded-lg transition-all custom-shadow cursor-pointer">
                <section className="relative">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/300/?random" />
                </section>
                <footer className='text-left py-14 px-14 border'>
                    <h6 className="flex items-left mt-4 text-xl leading-relaxed text-gray-800 cursor-pointer font-medium transition-all hover:text-gray-900"> {category} </h6>
                </footer>
            </article>
        </div>

    )
}

export default Collection;