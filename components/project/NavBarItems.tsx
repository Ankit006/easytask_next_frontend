"use client";

import { IMember } from "@/models/models";
import clsx from "clsx";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

interface ILink {
    name: string;
    href: string;
}

export default function NavBarItems({ member }: { member: IMember }) {
    const pathname = usePathname();
    const params = useParams<{ projectId: string }>();
    const basePath = `/projects/${params.projectId}`;

    const links: ILink[] = [
        {
            name: "Dashboard",
            href: basePath,
        },
        {
            name: "Members",
            href: `${basePath}/members`,
        },
        {
            name: "Backlogs",
            href: `${basePath}/backlogs`,
        },
        {
            name: "Sprints",
            href: `${basePath}/sprints`,
        },

    ];

    return (
        <div className="bg-black py-1 px-[5px] rounded-lg flex items-center space-x-2">
            <LinkContainer pathname={pathname} link={links[0]} />
            {member.role !== "member" && (
                <LinkContainer pathname={pathname} link={links[1]} />
            )}

            {member.role !== "member" && (
                <LinkContainer pathname={pathname} link={links[2]} />
            )}
            <LinkContainer pathname={pathname} link={links[3]} />

        </div>
    );
}
function LinkContainer({ pathname, link }: { pathname: string; link: ILink }) {
    return (
        <Link
            href={link.href}
            className={clsx("text-gray-300 text-sm px-4", {
                "bg-secondary text-white px-4 py-1 rounded-md": pathname === link.href,
            })}
        >
            {link.name}
        </Link>
    );
}
