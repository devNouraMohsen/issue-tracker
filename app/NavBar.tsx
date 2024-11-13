import Link from 'next/link';
import React from 'react';
import Logo from './images/Wajhni.png'; // Import Logo as default export

const NavBar = () => {
    const links = [
        { label: 'Dashboard', href:'/' },
        {  label:'Issues', href:'/' },
    ]
  return (
        <nav className='flex space-x-6 border-b mb-10 px-5 h-14 items-center bg-red-100'>
            <Link href="/">
                <img src={Logo.src} alt="Logo" className="h-10 w-auto" />
            </Link>
            <ul className='flex space-x-6'>
                {links.map(link => 
                    <Link
                        key={link.href} 
                        className='text-rose-300 hover:text-rose-500' 
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                )}
            </ul>
        </nav>

  );
};

export default NavBar;
