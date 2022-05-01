
const Collection = ({ category }) => {

    const Categories = ["How to Easily Setup a MetaMask Wallet", "How to Fund MetaMask with ETH", "How to Find an NFT You Love"]

    return (

        Categories?.map(c => (
            <div className="px-22 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
                <article className="overflow-hidden p-22 border-b flex gap-2 items-center rounded-lg transition-all custom-shadow cursor-pointer">
                    <section className="flex items-center gap-2">
                        <h5 className="font-bold">06</h5>
                        <div className=" h-64 w-64 rounded-full  border-4 border-gray-400">
                            <img alt="Placeholder" className="h-full rounded-full w-full overflow-hidden" src="https://picsum.photos/600/400/?random" /></div>
                    </section>
                    <main className="w-full">
                        <section className="flex items-center justify-between">
                            <h6 className="font-medium">Bored Ape Kennel Club</h6>
                            <span className="text-red-600">+146.83%</span>
                        </section>
                        <section className="flex items-center justify-between">
                            <h6 className="font-medium flex items-center gap-2">Floor price:
                                <img className="w-3" src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="" />
                                0.84
                            </h6>
                            <span className="text-red-600 flex items-center gap-2">
                                <img className="w-3" src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="" />
                                13,740.91</span>
                        </section>
                    </main>
                </article>
            </div>
        ))

    )
}

export default Collection;