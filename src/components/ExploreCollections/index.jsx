import Select from "../Common/Select";
import AtheletesGallery from "../AtheletesGallery";

const CollectionsContainer = () => {

    return (
        <>
            <AtheletesGallery>
                <section className="px-14 flex items-center justify-between gap-12 mb-28">
                <h3 className="text-20 font-bold text-secondary pr-0 lg:pr-22">09 ITEMS FOUND</h3>
                <div className="w-256">
                <Select />
                </div>
                </section>
            </AtheletesGallery>
        </>

    )
}

export default CollectionsContainer;