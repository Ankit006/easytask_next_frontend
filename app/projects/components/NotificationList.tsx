"use client"

import { socket } from '@/lib/utils';
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
            <button>
                <BellRing />
            </button>
        </div>
    )
}
