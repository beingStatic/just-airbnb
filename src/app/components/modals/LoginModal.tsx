'use client'

import {signIn} from 'next-auth/react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast'
import {useRouter} from 'next/navigation'
import Button from '../Button';
import useLoginModal from '@/app/hooks/useLoginModal';
 
const LoginModal = () => {
  const router = useRouter()
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal()
  const [isLoading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password:''
       }
  })
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);
    signIn('credentials', {
      ...data,
      redirect: false
    })
      .then((callback) => {
        setIsloading(false);
        if (callback?.ok) {
          toast.success('Logged in');
          router.refresh();
          loginModal.onClose();
        }
        if (callback?.error) {
          toast.error(callback.error)
        }
    })
  }
  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='Welcome backb'
        subTitle='Login to you Account'
      />
      <Input
        id="email"
        label='Email'
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
      <Input
        id="password"
        label='Password'
        type="password"
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
    </div>
  )
  const footerContent = (
    <div className='
    flex
    flex-col
    gap-4
    mt-3    
    '>
      <hr />
      <Button
        label="Google"
        outline
        icon={FcGoogle}
        onClick={() => { }}
      />
      <Button
        label="Github"
        outline
        icon={AiFillGithub}
        onClick={() => { }}
      />
      <div className='
              flex 
              flex-row
              gap-2
              items-center
              justify-center
              mt-4 
              font-light
              text-neutral-500'
      >
            <div>
              Already have an account
            </div>
            <div className='
                text-neutral-800
                cursor-pointer
                hover:underline'
        >
          Login
            </div>
        </div>
        </div>

  )


  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
 
export default LoginModal;