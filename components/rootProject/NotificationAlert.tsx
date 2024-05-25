"use client";

import { socket } from '@/lib/utils';
import { useEffect } from 'react';
import { useToast } from '../ui/use-toast';

export default function NotificationAlert({ userId }: { userId: number }) {
    const { toast } = useToast()
    useEffect(() => {
        if (userId) {
            socket.auth = { user_id: userId }
            socket.connect();
            socket.on("notification", (args) => {
                toast({ title: args })
            })

        }
    }, [userId, toast])
    return (
        <></>
    )
}
