"use client"

import { DropdownMenuContent, DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { socket } from '@/lib/utils';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { BellRing } from "lucide-react";
import { useEffect } from 'react';
interface Props {
    userId: number;
}
export default function NotificationList({ userId }: Props) {

    useEffect(() => {
        if (userId) {
            socket.auth = { user_id: userId };
            socket.on("notifications", (data) => {
                console.log(data)
            })
            socket.connect()
        }
    }, [userId])

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <BellRing />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='mr-6' align='start'>
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
