"use client";

import { UpdateSprintAction } from '@/actions/sprintAction';
import { ISprint } from '@/models/models';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import FormSubmitButton from '../custom/FormSubmitButton';
import { Dialog, DialogContent } from '../ui/dialog';
import SprintForm from './SprintForm';
import { useToast } from '../ui/use-toast';

interface Props {
    sprint: ISprint
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
    projectId: number
}

export default function UpdateSprintDialog({ sprint, open, onOpenChange, projectId }: Props) {
    const [state, dispatch] = useFormState(UpdateSprintAction.bind(null, sprint.id, projectId), {})
    const { toast } = useToast()
    useEffect(() => {
        if (state.error) {
            toast({
                title: state.error,
                variant: "destructive"
            })
        }

        if (state.message) {
            toast({
                title: state.message,

            })
        }
    }, [state, toast])

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='sm:max-w-[500px]'>
                <form action={dispatch}>
                    <SprintForm sprint={sprint} error={state.validation} />
                    <div className='mt-4 flex justify-end'>
                        <FormSubmitButton text='Update' />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
