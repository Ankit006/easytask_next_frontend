"use client";

import React, { useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "../ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

import { assignToSprintAction } from "@/actions/userStoryAction";
import { ISprint } from "@/models/models";
import { useFormState } from "react-dom";
import ErrorText from "../custom/ErrorText";
import FormSubmitButton from "../custom/FormSubmitButton";
import { useToast } from "../ui/use-toast";

interface Props {
    sprints: ISprint[];
    userStoryId: number;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AssignSprintForm({
    sprints,
    userStoryId,
    open,
    setOpen,
}: Props) {
    const [state, dispatch] = useFormState(
        assignToSprintAction.bind(null, userStoryId),
        {}
    );
    const { toast } = useToast();

    useEffect(() => {
        if (state.error) {
            toast({
                title: state.error,
            });
        }

        if (state.message) {
            setOpen(false);
        }
    }, [state, toast, setOpen]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-96">
                <DialogHeader>
                    <DialogTitle>Sprints</DialogTitle>
                </DialogHeader>
                <div>
                    <form className="flex items-center space-x-4" action={dispatch}>
                        <Select name="sprintId">
                            <SelectTrigger className="w-60">
                                <SelectValue placeholder="Select a sprint" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Sprints</SelectLabel>
                                    {sprints.map((sprint) => (
                                        <SelectItem key={sprint.id} value={`${sprint.id}`}>
                                            {sprint.title}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FormSubmitButton text="Assign" />
                    </form>
                    {state.validation && (
                        <div className="mt-2">
                            <ErrorText text={state.validation} />
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
