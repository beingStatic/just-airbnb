'use client';
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useRentModal from '@/app/hooks/useRentModal';

const UserMenu = () => {
  const registerModal = useRegisterModal()
  const rentModal = useRentModal()
  const [isOpen, setIsOpen] = useState(false);

const handleToggle = useCallback(() => {
  setIsOpen((value)=>!value)
}, [])
  
  const onRent = useCallback(() => {
   rentModal.onOpen()
 },[rentModal]) 
  
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div 
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >

          Airbnb your Home
        </div>
        <div onClick={handleToggle}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
        ">
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
          absolute
          rounded-xl
          shadow-md
          w-[40vw]
          md:w-3/4
          bg-white
          overflow-hidden
          right-0
          top-12
          text-sm
          ">
          <div className='flex flex-col cursor-pointer'>
            <>
              <MenuItem lable="Login" onClick={() => { }}></MenuItem>
              <MenuItem lable="Sign Up" onClick={registerModal.onOpen}></MenuItem>
              </>
          </div>
        </div>
      )}
    </div>
   );
}
 
export default UserMenu;