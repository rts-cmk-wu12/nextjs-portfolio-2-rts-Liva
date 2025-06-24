'use client'

import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
    const pathname = usePathname()

    return (
        <header className="flex justify-between px-15 py-4 bg-[#1B1B1B] mx-10 rounded-b-md">
            <nav>
                <ul className="flex gap-10">
                    <li><Link href='/' className={`capitalize text-sm ${pathname === '/' ? 'text-[#62BA1B]' : 'text-[#9C9C9C]'}`}>home</Link></li>
                    <li><Link href='/about' className={`capitalize text-sm ${pathname === '/about' ? 'text-[#62BA1B]' : 'text-[#9C9C9C]'}`}>about</Link></li>
                    <li><Link href='/contact' className={`capitalize text-sm ${pathname === '/contact' ? 'text-[#62BA1B]' : 'text-[#9C9C9C]'}`}>contact</Link></li>
                </ul>
            </nav>
            <ul className="flex gap-5">
                <li><Link href='https://www.linkedin.com/feed/' target="_blank"><FaLinkedinIn className="fill-[#9C9C9C] text-lg" /></Link></li>
                <li><Link href='https://www.behance.net' target="_blank"><FaBehance className="fill-[#9C9C9C] text-lg" /></Link></li>
                <li><Link href='https://x.com/?lang=en' target="_blank"><FaTwitter className="fill-[#9C9C9C] text-lg" /></Link></li>
            </ul>
        </header>
    );
}

export default Header;