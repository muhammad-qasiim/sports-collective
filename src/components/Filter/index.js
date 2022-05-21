
import { BsFilter } from "react-icons/bs";
import Accordion from '../Accordion'

const Filter = () => {
    return (
        <>
            <div className="w-340 bg-primary pb-22"> 
                <h3 className="text-20 font-medium text-white px-26 lg:px-42 py-28 flex items-center justify-end gap-2"> <BsFilter className='text-26' /> FILTER</h3>

                <Accordion title="STATUS">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis quis cumque.
                </Accordion>
                <Accordion title="PRICE">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis quis cumque.
                </Accordion>
                <Accordion title="CATEGORIES">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis quis cumque.
                </Accordion>
                <Accordion title="EXTRA OPTIONS">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis quis cumque.
                </Accordion>

            </div>
        </>
    )
}

export default Filter