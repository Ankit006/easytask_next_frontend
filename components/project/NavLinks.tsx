"use client";
import React from "react";
import { UsersRound, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import clsx from "clsx";
import { IMember } from "@/models/models";

interface ILink {
    name: string;
    href: string;
    icon: typeof UsersRound;
    background: string;
}

export default function NavLinks({ member }: { member: IMember }) {
    const pathname = usePathname();
    const params = useParams<{ projectId: string }>();
    const links: ILink[] = [
        {
            name: "Members",
            href: `/projects/${params.projectId}/members`,
            icon: UsersRound,
            background: "bg-yellow-300",
        },
        {
            name: "Chats",
            href: `/projects/${params.projectId}/chats`,
            icon: MessageCircleMore,
            background: "bg-green-400",
        },
    ];
    return (
        <nav className="flex items-center space-x-8">
            {member.role === "admin" && (
                <LinkContainer pathname={pathname} link={links[0]} />
            )}
            <LinkContainer pathname={pathname} link={links[1]} />
        </nav>
    );
}

function LinkContainer({ pathname, link }: { pathname: string; link: ILink }) {
    return (
        <Link
            key={link.name}
            href={link.href}
            className={clsx(
                `flex items-center space-x-2 border-2 border-slate-700 rounded-2xl px-4 transition-all duration-300 ${pathname === link.href && link.background
                }`,
                {
                    "pointer-events-none": pathname === link.href,
                }
            )}
        >
            <link.icon className={clsx("w-4 h-4")} />
            <p className=" py-1 font-medium text-gray-700">{link.name}</p>
        </Link>
    );
}
