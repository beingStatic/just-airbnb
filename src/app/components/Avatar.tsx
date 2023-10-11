'use client'
import AvatarImg from '/public/imgs/user.png'
import Image from "next/image"

interface AvatarProps{
  src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({
  src
}) => {
  return (
    <Image 
      src={src || AvatarImg}
      height={30}
      width={30}
      alt="avatar"
    />
  )
}

export default Avatar