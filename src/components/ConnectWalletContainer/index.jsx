
const ConnectWalletContainer = () => {

    const Collections = ["MetaMask", "Coinbase Wallet", "WalletConnect", "Phantom", "Authereum","MetaMask", "Coinbase Wallet", "WalletConnect", "Phantom", "Authereum"]

    return (
        <section className="container mx-auto px-24 lg:px-99 my-99">

            <h3 className="text-40 font-semibold text-center mb-24">Connect your wallet.</h3>

            <p className="mt-4 text-lg leading-relaxed text-gray-600 text-center">
                Connect with one of our available <span className="text-red-600 cursor-pointer transition-all font-semibold"> wallet </span> providers or create a new one.
            </p>

            <div className="text-sm text-gray-500  border-gray-200 mb-32 mx-8">
                <ul className="rounded-8 card-shadow bg-gray-50 w-full md:w-384 mx-auto my-60 border">
                    {
                        Collections?.map(collection => (
                            <li>
                                <div className={`wallet-item flex items-center gap-4 font-normal text-lg cursor-pointer transition-all px-26 border-b py-10`}>
                                    <img className="w-24" src="/assets/metamask.webp" alt="" />
                                    {collection}
                                </div>
                            </li>
                        ))
                    }
                    <li>
                        <p className={`wallet-item font-medium text-lg cursor-pointer transition-all text-gray-500 px-26 text-center border-b py-10`}>Show more options</p>
                    </li>
                </ul>
            </div>


        </section>
    )
}

export default ConnectWalletContainer;