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
                        className="font-semibold text-white"
                    >
                        {title}
                    </h3>

                    <BiChevronDown className='text-26 text-gray-200' />                 
                </div>

                <section className={`${toggle ? 'opacity-1 block' : 'opacity-0 hidden'} text-gray-200 bg-blueish py-18`}>
                    <div className="px-26 lg:px-42 ">
                    {children}
                    </div>
                </section>

            </section>
        </>
    )
}

export default Accordion;
