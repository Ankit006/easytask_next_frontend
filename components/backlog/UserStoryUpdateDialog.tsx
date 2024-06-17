"use client"
import React, { useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { IUserStory } from "@/models/models";
import { Settings2 } from "lucide-react";
import { useFormState } from "react-dom";
import UserStoryForm from "./UserStoryForm";
import FormSubmitButton from "../custom/FormSubmitButton";
import { updateUserStoryAction } from "@/actions/userStoryAction";
import { useToast } from '../ui/use-toast';

interface Props {
    userStory: IUserStory
    projectId: string
}

export default function UserStoryUpdateDialog({ userStory, projectId }: Props) {
    const [state, dispatch] = useFormState(updateUserStoryAction.bind(null, userStory.id, parseInt(projectId)), {})
    const { toast } = useToast();

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.message
            })
        }

        if (state.error) {
            toast({
                title: state.error,
                variant: "destructive"
            })
        }
    }, [state, toast])

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button>
                    <Settings2 className="w-4 h-4" />
                </button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[424px]'>
                <DialogHeader>
                    <DialogTitle>Update user story</DialogTitle>
                </DialogHeader>
                <form className="mt-6" action={dispatch}>
                    <UserStoryForm defaultValues={userStory} />
                    <div className='flex justify-end mt-4'>
                        <FormSubmitButton text='Update' />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
