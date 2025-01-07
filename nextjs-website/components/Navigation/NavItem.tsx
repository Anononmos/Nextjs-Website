import React from "react";
import Link from "next/link";

type NavItemProps = { 
    href: string, 
    children: string | React.ReactNode
}

export default function NavItem({ href, children }: NavItemProps) {
    return (
        <Link href={href} className="py-2 hover:underline text-white font-semibold hover:text-cyan-200">
            { children }
        </Link>
    );
}