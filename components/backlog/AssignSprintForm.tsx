"use client";

import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Plus } from "lucide-react";


import FormSubmitButton from "../custom/FormSubmitButton";
import { ISprint } from '@/models/models';
import { useFormState } from 'react-dom';
import { assignToSprintAction } from '@/actions/userStoryAction';
import { useToast } from '../ui/use-toast';
import ErrorText from '../custom/ErrorText';

interface Props {
    sprints: ISprint[]
    backlogId: number;
}

export default function AssignSprintForm({ sprints, backlogId }: Props) {
    const [state, dispatch] = useFormState(assignToSprintAction.bind(null, backlogId), {})
    const { toast } = useToast()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (state.error) {
            toast({
                title: state.error
            })
        }

        if (state.message) {
            setOpen(false)
        }
    }, [state, toast])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="font-bold text-blue-500 flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Assign
                </button>
            </DialogTrigger>
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
                    {state.validation && <div className='mt-2'>
                        <ErrorText text={state.validation} />
                    </div>}
                </div>
            </DialogContent>
        </Dialog>
    )
}
