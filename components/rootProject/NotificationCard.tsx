import { INotification } from "@/models/models";
import React, { useEffect } from "react";
import { X } from "lucide-react"
import { clearSingleNotificationAction } from "@/actions/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "../ui/use-toast";
import ProjectInviteApproveBtn from "./ProjectInviteApproveBtn";
interface Props {
    notification: INotification;
}

export default function NotificationCard({ notification }: Props) {

    switch (notification.type) {
        case "invite":
            return <RequestNotification notification={notification} />
        default:
            return <></>
    }

}

function RequestNotification({
    notification,
}: {
    notification: INotification;
}) {
    const [state, dispatch] = useFormState(clearSingleNotificationAction, {})
    const { pending } = useFormStatus()
    const { toast } = useToast()

    useEffect(() => {
        if (state.error) {
            toast({
                title: state.error,
                variant: "destructive"
            })
        }
    }, [state, toast])


    return (
        <div className={`border border-gray-200 rounded px-4 py-3 ${pending && "bg-gray-100"}`}>
            <div className="flex justify-between items-start space-x-2">
                <p className="text-sm">
                    {notification.sender.name} wants you to  join{" "}
                    {notification.project?.title}
                </p>
                <form action={dispatch}>
                    <button><X className="h-3 w-3" /></button>
                    <input type="hidden" value={JSON.stringify(notification)} name="notification" />
                </form>
            </div>

            <div className="flex justify-end mt-4">
                <ProjectInviteApproveBtn notification={notification} />
            </div>
        </div>
    );
}


