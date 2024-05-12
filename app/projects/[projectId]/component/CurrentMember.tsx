import { getCurrentMember } from "@/queries/queries";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default async function CurrentMember({
    projectId,
}: {
    projectId: string;
}) {
    const member = await getCurrentMember(projectId);
    return (
        <div className="flex items-center space-x-4">
            <div className="text-right">
                <p className="capitalize  font-semibold">{member.users.name}</p>
                <p
                    className={clsx("text-sm", {
                        "text-red-500": member.role === "admin",
                        "text-yellow-500": member.role === "moderator",
                        "text-green-500": member.role === "member",
                    })}
                >
                    {member.role}
                </p>
            </div>
            <Image
                priority
                src="/user_icon.png"
                alt="user icon"
                width="50"
                height="50"
            />
        </div>
    );
}
