
const Collection = ({ title, img }) => {

    return (

        <div className="my-18 px-14 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/4">
            <article className="overflow-hidden">
                <section className="relative">
                    <img alt="Placeholder" className="block h-auto w-48 mx-auto" src={img} />
                </section>
                <footer className='text-center py-14 px-12'>
                    <h6 className="mt-4 text-md leading-relaxed text-gray-900 font-semibold"> {title} </h6>
                    <p className="text-gray-500">Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
                </footer>
            </article>
        </div>

    )
}

export default Collection;