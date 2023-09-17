'use client';
import Image from 'next/image'
import AirBnbLogo from 'public/imgs/logo.png'
import { useRouter } from 'next/navigation';
const Logo = () => {
  const router = useRouter()
  return ( 
    <Image
      src={AirBnbLogo}
      alt="airbnb logo"
      height={100}
      width={100}
      className='hidden md:block cursor-pointer'
    />
   );
}
 
export default Logo;