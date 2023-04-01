import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import {useRecoilState} from 'recoil';
import { SendState } from "@/Atoms/SendAtom";
import {useState} from 'react';

const ContactMe = () => {

    const [loading, setLoading] = useState(false);
    const [sendModal, setSendModal] = useRecoilState(SendState);
    const {register, handleSubmit} = useForm();
    const onSubmit = async formData => {
        setLoading(true);

        await emailjs.send("service_qtel2ak","template_bn6f5gp", {
            from_name: formData.name,
            email: formData.email,
            message: formData.message,
            Subject: formData.subject
        }, 'AQipxXnwghBNBPHFh')

        setLoading(false)

        document.getElementById('top').scrollIntoView();
        setSendModal(true)
    }

    return (
        <div className="flex flex-col relative text-center md:text-left
        max-w-7xl px-10 justify-evenly mx-auto items-center">
            <div className="mt-6 uppercase tracking-[6px] text-gray-500 text-xl mb-8 md:mb-[100px]">Contact Me</div>
            <div className="text-3xl mb-6">Let's build something <span className="text-blue-400">cool!</span></div>
            <div className="flex space-x-3 mt-11">
                <EnvelopeIcon className="w-6 h-6 text-blue-400"/>
                <div>parkerarchibald97@gmail.com</div>
            </div>

            <form className="flex flex-col space-y-2 mx-auto w-[100%] mt-[100px] md:w-[60%]" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex space-x-2">
                    <input placeholder='Name' type='text' className="contactInput w-[50%]" {...register('name')} required/>
                    <input placeholder='Subject' type='text' className="contactInput w-[50%]" {...register('subject')}/>
                </div>
                <input placeholder='Email' className="contactInput" type='email' {...register('email')} required/>
                <textarea placeholder='Message' className="contactInput md:h-[20vh]" {...register('message')} required></textarea>
                {loading === true ? (
                    <button className="bg-blue-400 py-5 px-10 rounded-md text-black
                    font-bold text-lg">Sending...</button>
                ) : (
                    <button className="bg-blue-400 py-5 px-10 rounded-md text-black
                    font-bold text-lg">Submit</button>
                )}
            </form>
        </div>
    )
}

export default ContactMe;