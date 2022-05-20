import Select from "../Common/Select";
import AtheletesGallery from "../AtheletesGallery";

const CollectionsContainer = () => {

    return (
        <>
            <AtheletesGallery>
                <section className="px-14 flex flex-col md:flex-row items-end md:items-center justify-between gap-4 md:gap-8 mb-28">
                <h3 className="text-20 font-medium text-secondary pr-0 lg:pr-22">09 <span className="font-light text-gray-600"> Items found </span></h3>
                <div className="w-full md:w-256">
                <Select />
                </div>
                </section>
            </AtheletesGallery>
        </>

    )
}

export default CollectionsContainer;