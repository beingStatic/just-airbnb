'use client'

import { IconType } from "react-icons"
interface CategoryProps{
  label: String,
  icon: IconType,
  selected?:boolean
}

const CategoryBox: React.FC<CategoryProps> = ({
  label,
  icon,
  selected
}) => {
  return (<>
  
  </>);
}
 
export default CategoryBox;