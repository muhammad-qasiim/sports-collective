import Input from "../Common/Input";

const ConnectWalletContainer = () => {

    const Collections = ["MetaMask", "Coinbase Wallet", "WalletConnect", "Phantom", "Venly", "Kaikas", "Authereum", "Torus", "Phantom", "Dapper"]

    return (
        <>
            <section className='mt-99 relative'>
                <img className='absolute -top-10 left-0 hidden lg:block' src="/assets/left-graphic.png" alt="" />
                <h3 className="text-40 font-semibold text-center mb-44">Transfer</h3>
                <img className='absolute -top-10 right-0 hidden lg:block' src="/assets/right-graphic.png" alt="" />
            </section>

            <section className="container mx-auto px-24 lg:px-99 mb-99">

                <div className="mb-44 flex justify-center rounded-20">
                    <img className="rounded-20 border-8" src="https://picsum.photos/400/300/?random" alt="" />
                </div>

                <div className="block md:flex justify-center">
                    <Input label="Address" placeholder="eg. gdks4534lkfjs" />
                </div>

                <p className="mt-14 text-md leading-relaxed text-gray-600 text-center">
                    "Jolly" will be tranferred to ....
                </p>

            </section>
        </>
    )
}

export default ConnectWalletContainer;