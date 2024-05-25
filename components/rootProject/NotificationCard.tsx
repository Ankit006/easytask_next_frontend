import { INotification } from "@/models/models";
import React from "react";
import { X } from "lucide-react"
interface Props {
    notification: INotification;
}

export default function NotificationCard({ notification }: Props) {
    if (notification.type === "invite") {
        return <RequestNotification notification={notification} />;
    } else {
        return <></>;
    }
}

function RequestNotification({
    notification,
}: {
    notification: INotification;
}) {
    return (
        <div className="border border-gray-200 rounded px-4 py-3">
            <div className="flex justify-between items-start space-x-2">
                <p className="text-sm">
                    {notification.sender.name} wants you to  join{" "}
                    {notification.project?.title}
                </p>
                <button><X className="h-3 w-3" /></button>
            </div>

            <div className="flex justify-end">
                <button className="text-sm font-semibold text-blue-400">Approve</button>
            </div>
        </div>
    );
}
