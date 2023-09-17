"use client";
interface MenuItemProps {
  onClick: () => void,
  lable:string
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  lable
}) => {
  return (
    <div onClick={onClick} className="
    cursor-pointer
    px-4
    py-3
    hover:bg-neutral-200
    font-semibold
    transition
    ">
{lable}
    </div>
  )
  
}
 
export default MenuItem;