"use client";
import { deleteUserStoryAction } from "@/actions/userStoryAction";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { useToast } from "../ui/use-toast";

export default function DeleteUserStory({
    userStoryId,
    projectId
}: {
    userStoryId: number;
    projectId: number
}) {
    const [state, dispatch] = useFormState(
        deleteUserStoryAction.bind(null, userStoryId, projectId),
        {}
    );
    const { toast } = useToast();
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
            <button>Delete</button>
        </form>
    );
}
