"use client";
import { deleteUserStoryAction } from "@/actions/userStoryAction";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "../ui/use-toast";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DeleteUserStory({
    userStoryId,
    projectId,
}: {
    userStoryId: number;
    projectId: number;
}) {
    const [state, dispatch] = useFormState(
        deleteUserStoryAction.bind(null, userStoryId, projectId),
        {}
    );
    const { toast } = useToast();
    const { pending } = useFormStatus();
    const pathname = usePathname();

    useEffect(() => {
        if (state.error) {
            toast({
                title: state.error,
                variant: "destructive",
            });
        }
    }, [state, toast]);
    return (
        <form
            className="hover:bg-secondary hover:text-red-600 text-red-500 w-full font-semibold text-sm pl-2 rounded py-1"
            action={dispatch}
        >
            <input value={pathname} name="pathname" type="hidden" />
            <button>
                {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Delete"}
            </button>
        </form>
    );
}
