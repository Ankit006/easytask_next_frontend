import { IUser } from "@/models/models";
import React from "react";
import { Button } from "../ui/button";

interface Props {
    user: IUser;
}

export default function RequestUserCard({ user }: Props) {
    return (
        <div className="border border-gray-300 rounded p-4">
            <p className="text-sm font-medium">{user.name}</p>

            <div className="mt-2 flex justify-end">
                <Button className="text-xs">Send</Button>
            </div>
        </div>
    );
}
