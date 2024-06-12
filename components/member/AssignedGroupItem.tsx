"use client"

import { unAssignGroupAction } from "@/actions/groupAction";
import { IGroup } from "@/models/models";
import clsx from "clsx";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "../ui/use-toast";


interface Props {
    memberId: number;
    group: IGroup
}

export default function AssignedGroupItem({ group, memberId }: Props) {
    const [state, dispatch] = useFormState(unAssignGroupAction.bind(null, group.id, memberId), {});
    const { pending } = useFormStatus();

    const { toast } = useToast();


    useEffect(() => {
        if (state.error) {
            toast({
                variant: "destructive",
                title: state.error
            })
        }
    }, [state, toast])

    return (
        <form
            action={dispatch}
            style={{ backgroundColor: group.color }}
            className={clsx(
                "px-2 py-1 rounded-2xl text-xs border border-white/45 flex items-center ",
                {
                    "text-black border-none":
                        group.color !== "" && group.color !== "transparent",
                }
            )}
        >
            {group.name}
            <button disabled={pending}>
                <X className="w-3 h-3 ml-2" />
            </button>
        </form>
    )
}
