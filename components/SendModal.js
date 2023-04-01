import {useRecoilState} from 'recoil';
import { SendState } from '@/Atoms/SendAtom';

const SendModal = () => {

    const [sendState, setSendState] = useRecoilState(SendState);
    const handleClose = () => {
        setSendState(false)
    }

    return (
        <div>
            {sendState === true && (
                <div className='bg-white w-[80%] h-[100px] fixed top-[40%] left-[10%] rounded-lg flex flex-col space-y-3 items-center text-black md:w-[300px] md:left-[45%]'>
                    <div className='text-right w-full mr-4 cursor-pointer' onClick={handleClose}>X</div>
                    <div>Your message has been sent!</div>
                </div>
            )}
        </div>
    )
}

export default SendModal;