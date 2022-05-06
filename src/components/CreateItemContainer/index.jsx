import { useState } from 'react'
import Input from '../Common/Input'

const CreateItemContainer = () => {

    return (
        <>
            <section className='mt-99 relative'>
                <img className='absolute -top-10 left-0 hidden lg:block' src="/assets/left-graphic.png" alt="" />
                <section className="container mx-auto px-24 lg:px-99 my-99 w-2/4">
                    <h3 className="text-40 font-semibold text-left mb-99">Create New Item</h3>
                </section>
                <img className='absolute -top-10 right-0 hidden lg:block' src="/assets/right-graphic.png" alt="" />
            </section>

            <section className="container mx-auto px-24 lg:px-99 mt-28 mb-202 w-2/4">
                <Input className="mb-22" label="Name" lab placeholder="Item name" />

                <div>
                    <label className="text-gray-600 font-medium" htmlFor="#">External link</label> <br />
                    <p className='text-gray-500 text-14 font-medium mb-8'>OpenSea will include a link to this URL on this item's detail page, so that users can click <br /> to learn more about it. You are welcome to link to your own webpage with more details.</p>
                    <Input lab placeholder="https://yoursite.io/item/123" />
                </div>

            </section>
        </>

    )
}

export default CreateItemContainer;