"use client"
import { updateUserStoryAction } from "@/actions/userStoryAction";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IUserStory } from "@/models/models";
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import FormSubmitButton from "../custom/FormSubmitButton";
import { useToast } from '../ui/use-toast';
import UserStoryForm from "./UserStoryForm";

interface Props {
    userStory: IUserStory
    projectId: number
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UserStoryUpdateDialog({ userStory, projectId, open, setOpen }: Props) {
    const [state, dispatch] = useFormState(updateUserStoryAction.bind(null, userStory.id, projectId), {})
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
        <Dialog open={open} onOpenChange={setOpen}>
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
