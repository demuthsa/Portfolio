import { FunctionComponent, useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from 'next/router'

const NavItem:FunctionComponent<{
    activeItem:String
    setActiveItem:Function
    name:String
    route:String
}> = ({activeItem, name, route, setActiveItem}) => {
    return (
        activeItem !== name ? (
            <Link href={`${route}`}>
              <a>
                <span onClick={()=>setActiveItem(name)} className='hover:text-green-400'>{name}</span>
              </a>
            </Link>
          ):null
    )
}



const Navbar = () => {
  const [activeItem, setActiveItem] = useState<String>('');

  
const { pathname } = useRouter()
  
  useEffect(() => {
      if(pathname === "/")setActiveItem('About')
      if(pathname === "/projects")setActiveItem('Projects')
      if(pathname === "/resume")setActiveItem('Resume')
    
  }, [])  


  
  return (
    <div className='flex items-center justify-between px-5 py-3 my-3'>
      <span className='text-xl font-bold text-green-400 border-b-4 border-green md:text-2xl'>{activeItem}</span>
      <div className='flex space-x-3 text-lg md:text-xl'>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
      </div>
    </div>
  );
};

export default Navbar;
