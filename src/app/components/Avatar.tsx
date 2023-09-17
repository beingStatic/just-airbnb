'use client'
import AvatarImg from '/public/imgs/user.png'
import Image from "next/image"
const Avatar = () => {
  return (
    <Image 
      src={AvatarImg}
      height={30}
      width={30}
      alt="avatar"
    />
  )
}

export default Avatar