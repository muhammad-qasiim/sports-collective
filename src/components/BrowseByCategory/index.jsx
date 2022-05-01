import Collection from './category'

const CollectionsContainer = () => {

    const Categories = ["Art", "Collectibles", "Domain Names", "Music", "Photography", "Sports", "Trading Cards", "Utility", "Virtual Worlds"]

    return (
        <section className="container mx-auto px-24 lg:px-99 my-99">

            <h3 className="text-28 font-semibold text-center mb-38">Browse by category</h3>

            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    Categories?.map(category => (
                        <Collection category={category} />
                    ))
                }
            </div>
        </section>
    )
}

export default CollectionsContainer;