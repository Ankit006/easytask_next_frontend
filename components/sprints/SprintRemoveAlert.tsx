"use client";
import React, { useEffect } from "react";
import FormSubmitButton from "../custom/FormSubmitButton";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { useFormState } from "react-dom";
import { removeSprintAction } from "@/actions/sprintAction";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

interface Props {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
    sprintId: number;
}

export default function SprintRemoveAlert({
    open,
    onOpenChange,
    sprintId,

}: Props) {
    const router = useRouter();
    const [state, dispatch] = useFormState(removeSprintAction.bind(null, sprintId), {});
    const { toast } = useToast()
    useEffect(() => {
        if (state.error) {
            toast({
                title: state.error,
                variant: "destructive"
            })
        }

    }, [state, toast, router])

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Do want to remove this sprint?</DialogTitle>
                    <DialogDescription>
                        All user stories will be safe, but tasks will be removed
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex justify-end items-center space-x-8">
                    <button onClick={() => onOpenChange(false)}>Close</button>
                    <form action={dispatch}>
                        <FormSubmitButton
                            text="Delete"
                            className="bg-red-500 hover:bg-red-600"
                        />
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
