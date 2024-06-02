"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { cacheClearAction, clearNotifications } from "@/actions/actions";
import { INotification } from "@/models/models";
import { BellRing } from "lucide-react";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import NotificationCard from "./NotificationCard";
interface Props {
    userId: number;
    notifications: INotification[];
}
export default function NotificationList({ userId, notifications }: Props) {
    const revalivateAction = cacheClearAction.bind(null, "notifications");
    const [state, dispatch] = useFormState(clearNotifications, {})
    const { toast } = useToast()

    useEffect(() => {
        if (state.error) {
            toast({
                title: state.error
            })
        }
    }, [state, toast])
    return (
        <Dialog>
            <DialogTrigger asChild>
                <form action={revalivateAction}>
                    <button>
                        <BellRing />
                    </button>
                </form>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] overflow-auto">
                <DialogHeader>
                    <DialogTitle>Notifications</DialogTitle>
                </DialogHeader>
                {notifications.length > 0 ? (
                    <>
                        <div className="flex justify-end">
                            <form action={dispatch}>
                                <Button variant="outline" className="text-xs">
                                    Clear
                                </Button>
                            </form>
                        </div>
                        <div className="mt-2 flex flex-col w-full space-y-3 max-h-96 overflow-y-auto">
                            {notifications.map((notification, index) => (
                                <NotificationCard notification={notification} key={index} />
                            ))}
                        </div>
                    </>
                ) : (
                    <p className="text-center text-sm text-gray-600 mt-4">No notifications </p>
                )}
            </DialogContent>
        </Dialog>
    );
}
