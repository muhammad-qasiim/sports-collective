import Collection from './category'

const CreateAndSellNFTs = () => {

    const Categories = [{title: 'Set up your wallet', img: '/assets/wallet.svg'}, {title: 'Create your collection', img: '/assets/collection.svg'}, {title: 'Add your NFTs', img: '/assets/nft.svg'}, {title: 'List them for sale', img: '/assets/sale.svg'}]

    return (
        <section className="container mx-auto px-24 lg:px-99 my-99">

            <h3 className="text-28 font-semibold text-center mb-38">Create and sell your NFTs</h3>

            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    Categories?.map(category => (
                        <Collection title={category?.title} img={category?.img} />
                    ))
                }
            </div>
        </section>
    )
}

export default CreateAndSellNFTs;