"use client";


import { INotification } from "@/models/models";
import { useFormState } from "react-dom";
import { useToast } from "../ui/use-toast";
import { useEffect } from "react";
import { joinProjectAction } from "@/actions/projectAction";

interface Props {
    notification: INotification
}

export default function ProjectInviteApproveBtn({ notification }: Props) {
    const [state, dispatch] = useFormState(joinProjectAction.bind(null, notification.project!!.id), {})
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
        <form action={dispatch}>
            <button className="text-sm font-semibold text-blue-400">Approve</button>
            <input type="hidden" value={JSON.stringify(notification)} name="notification" />
        </form>
    )
}
