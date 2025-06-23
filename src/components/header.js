'use client'

import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
    const pathname = usePathname()

    return (
        <header className="flex justify-between px-15 py-4 bg-neutral-800 mx-10 rounded-b-md">
            <nav>
                <ul className="flex gap-10">
                    <li><Link href='/' className={`capitalize text-sm ${pathname === '/' ? 'text-green-500' : 'text-neutral-500'}`}>home</Link></li>
                    <li><Link href='/about' className={`capitalize text-sm ${pathname === '/about' ? 'text-green-500' : 'text-neutral-500'}`}>about</Link></li>
                    <li><Link href='/contact' className={`capitalize text-sm ${pathname === '/contact' ? 'text-green-500' : 'text-neutral-500'}`}>contact</Link></li>
                </ul>
            </nav>
            <ul className="flex gap-5">
                <li><Link href='https://www.linkedin.com/feed/' target="_blank"><FaLinkedinIn className="fill-neutral-500 text-lg" /></Link></li>
                <li><Link href='https://www.behance.net' target="_blank"><FaBehance className="fill-neutral-500 text-lg" /></Link></li>
                <li><Link href='https://x.com/?lang=en' target="_blank"><FaTwitter className="fill-neutral-500 text-lg" /></Link></li>
            </ul>
        </header>
    );
}

export default Header;