'use client'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import {toast} from 'react-hot-toast'
import Button from '../Button';

import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation';
 
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password:''
       }
  })

  const router = useRouter()
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);
    axios.post('/api/register', data)
      .then(() => {
        toast.success('Logged in');
          router.refresh();
        registerModal.onClose();
      })
      .catch(error => {
      toast.error('Something went wrong')
      })
      .finally(() => {
      setIsloading(false)
    })
  }
  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='Welcome to Airbnb'
        subTitle='Create an account'
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
        id="name"
        label='Name'
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
        onClick={() =>signIn('github') }
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
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
 
export default RegisterModal;