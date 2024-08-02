"use client";
import { deleteUserStoryAction } from "@/actions/userStoryAction";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "../ui/use-toast";
import { Loader2 } from "lucide-react";

export default function DeleteUserStory({
    userStoryId,
    projectId,
    type,
    currentSprintId,
}: {
    userStoryId: number;
    projectId: number;
    type: "backlogs" | "user stories";
    currentSprintId?: number;
}) {
    const [state, dispatch] = useFormState(
        deleteUserStoryAction.bind(null, userStoryId, projectId, type),
        {}
    );
    const { toast } = useToast();
    const { pending } = useFormStatus();
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
            {currentSprintId && <input type="hidden" value={currentSprintId} />}
            <button>
                {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Delete"}
            </button>
        </form>
    );
}
