'use client'

import Container from '../Container'
import Categories from './Categories';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import { SafeUser } from '@/app/types';

interface navbarProps{
  currentUser?:SafeUser | null
}
const Navabr: React.FC<navbarProps> = ({
  currentUser
}) => {
  return (
    <div className="fixed w-full z-10 bg-white shadow-sm">
      <div className="p-4 border-b-[1px]">
        <Container>
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navabr;
