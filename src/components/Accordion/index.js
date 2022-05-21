import { useState } from "react"
import { BiChevronDown } from "react-icons/bi";

const Accordion = ({ title, children }) => {
    const [toggle, settoggle] = useState(false)


    return (
        <>
            <section className="py-8">
                <div
                    onClick={() => settoggle(!toggle)}
                    className="flex items-center justify-between cursor-pointer pb-12 border-b border-blueish px-26 lg:px-42"
                >
                    <h3
                        className="font-bold text-white"
                    >
                        {title}
                    </h3>

                    <BiChevronDown className='text-28 text-gray-200' />
                </div>

                <section className={`${toggle ? 'opacity-1 block' : 'opacity-0 hidden'} text-gray-200 bg-blueish py-28`}>
                    <div className="px-26 lg:px-42 ">
                        {title === 'STATUS' ? (
                            <div className="grid grid-cols-2">
                                <div className="mb-8">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Buy now" />
                                    <label for="vehicle1"> Buy now</label>
                                </div>
                                <div className="mb-8">
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Live auctions" />
                                    <label for="vehicle2"> Live auctions</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="New" />
                                    <label for="vehicle3"> New</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="vehicle3" name="vehicle4" value="Has offers" />
                                    <label for="vehicle4"> Has offers</label>
                                </div>
                            </div>
                        ) : children}
                    </div>
                </section>

            </section>
        </>
    )
}

export default Accordion;
