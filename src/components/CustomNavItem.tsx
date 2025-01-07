import React, { useEffect, useRef, useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
const links = [
    { id: "statistics", name: "Statistics" },
    { id: "how-it-works", name: "How it works" },
    { id: "our-work", name: "Our work" },
    { id: "pricing", name: "Pricing" },
    { id: "contact-us", name: "Contact us" },
  ];
  

const CustomNavItem = () => {
    const [navOpen, setnavOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setnavOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
  return (
   <div className='relative' ref={navRef}>
    <IoReorderThreeOutline  className="text-white text-[35px] block md:hidden" onClick={()=>setnavOpen((prev)=>!prev)}/>
        {navOpen && (
            <div className="absolute right-0 w-[100px] h-[180px] backdrop-blur-md  z-10 rounded-lg">
                {links.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className="block px-4 py-2 text-sm text-white no-underline hover:bg-gray-700 font-bold"
                        onClick={() => setnavOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        )}

   </div>
  )
}

export default CustomNavItem