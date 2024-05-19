"use client";
import React from "react";
import { UsersRound, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import clsx from "clsx";

interface ILink {
    name: string;
    href: string;
    icon: typeof UsersRound;
}


export default function NavLinks() {
    const pathname = usePathname();
    const params = useParams<{ projectId: string }>();
    const links: ILink[] = [
        {
            name: "Members",
            href: `/projects/${params.projectId}/members`,
            icon: UsersRound,
        },
        {
            name: "Chats",
            href: `/projects/${params.projectId}/chats`,
            icon: MessageCircleMore
        }
    ];
    return (
        <nav className="flex flex-col space-y-4">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx("px-2 w-full flex items-center space-x-2 ", {
                        "pointer-events-none": pathname === link.href
                    })}
                >
                    <div className={clsx("p-3 rounded-full", {
                        "bg-gray-800 text-white": pathname === link.href,
                        "bg-gray-200": pathname !== link.href,
                    })}>
                        <link.icon className="w-4 h-4 " />
                    </div>
                    <p className=" py-1 font-medium  text-gray-700">
                        {link.name}
                    </p>
                </Link>
            ))}
        </nav>
    );
}
