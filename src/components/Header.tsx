"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <header className="bg-gradient-to-r from-primary to-accent text-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold hover:opacity-80">東京フレッシュマンガイド</Link>
                <nav className="hidden md:flex space-x-6">
                    <Link
                        href="/housing"
                        className={`hover:underline ${isActive('/housing') ? 'font-bold' : ''}`}
                    >
                        住まい
                    </Link>
                    <Link
                        href="/finance"
                        className={`hover:underline ${isActive('/finance') ? 'font-bold' : ''}`}
                    >
                        お金
                    </Link>
                    <Link
                        href="/lifestyle"
                        className={`hover:underline ${isActive('/lifestyle') ? 'font-bold' : ''}`}
                    >
                        生活
                    </Link>
                    <Link
                        href="/career"
                        className={`hover:underline ${isActive('/career') ? 'font-bold' : ''}`}
                    >
                        キャリア
                    </Link>
                    <Link
                        href="/community"
                        className={`hover:underline ${isActive('/community') ? 'font-bold' : ''}`}
                    >
                        コミュニティ
                    </Link>
                </nav>
                <button className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
} 
