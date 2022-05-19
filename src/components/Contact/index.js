import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Common/Input'
import ForgetPassword from '../UserAuthScreens/ForgetPassword';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>

            <main className='auth-container max-w-md mx-auto'>
                <img className="w-80 cursor-pointer mx-auto mt-8 mb-32" src="/assets/logo.svg" alt="" />

                <p className="text-center text-gray-600 font-bold my-28">Send us a Message!</p>

                <div className='w-full'>
                    <Input placeholder='Name' className='mb-16' />
                    <Input placeholder='Email' className='mb-16' />
                    <Input placeholder='Phone' className='mb-16' />
                </div>
                <textarea className='w-full py-18 px-16' placeholder='Message' rows="4"></textarea>
                <button className="bg-primary text-white w-full mt-10 mb-18 px-32 py-10 rounded-5 transition-all hover:bg-purple-700 relative top-0 hover:top-px" >Submit</button>
            </main>


            <ForgetPassword isOpen={isOpen} setIsOpen={setIsOpen} />

        </>
    )
}

export default Contact;