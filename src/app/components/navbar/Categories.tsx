import Container from "../Container";
import {TbBeach} from "react-icons/tb"
import {GiBoatFishing, GiWindmill,GiIsland, GiCastle, GiForestCamp, GiCactus,GiCaveEntrance, GiBarn} from "react-icons/gi"
import { MdOutlineVilla } from "react-icons/md"
import { TbMountain,TbPool } from "react-icons/tb"
import { FaSkiing } from "react-icons/fa"
import { BsSnow } from "react-icons/bs"
import { IoDiamond } from "react-icons/io5"
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description:"This property is clode to the beach"
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description:"This property has windmill"
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description:"This property is Modern"
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description:"This property is Modern"
  },
  {
    label: "Pools",
    icon: TbPool,
    description:"This property has a pool"
  },
  {
    label: "Islands",
    icon: GiIsland,
    description:"This property is on a island"
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description:"This property is close to a lake"
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description:"This property has skiing activities"
  },
  {
    label: "Castles",
    icon: GiCastle,
    description:"This property is in a castle"
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description:"This property has camping activities"
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description:"This property has camping activities"
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description:"This property is in a cave"
  },
  {
    label: "Desert",
    icon: GiCactus,
    description:"This property is in a desrt"
  },
  {
    label: "Barns",
    icon: GiBarn,
    description:"This property is in a barn"
  },
  {
    label: "Desert",
    icon: GiCactus,
    description:"This property is in a cave"
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description:"This property is luxurious"
  },

]
const Categories = () => {
  return (<>
    <Container>
      <div
        className="pt-4 
                  flex
                  flex-row
                  items-center
                  justify-between
                  overflow-x-auto">
        
      </div>
      {categories.map(item => {
       return <CategoryBox 
          key={item.label}
          label={item.label}
          icon={item.icon}
          // description={item.description}
          /> })} 
  </Container>
  </>);
}
 
export default Categories;