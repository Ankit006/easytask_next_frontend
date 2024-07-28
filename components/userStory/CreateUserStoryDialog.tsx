"use client"

import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import UserStoryForm from '../backlog/UserStoryForm'
import FormSubmitButton from '../custom/FormSubmitButton'
import { useFormState } from 'react-dom'
import { createUserStoryAction } from '@/actions/userStoryAction'
import { useToast } from '../ui/use-toast'

export default function CreateUserStoryDialog({ projectId }: { projectId: number }) {
    const [state, dispatch] = useFormState(createUserStoryAction.bind(null, projectId), {})
    const [open, setOpen] = useState(false)
    const { toast } = useToast()


    useEffect(() => {
        if (state.message) {
            toast({
                title: state.message
            })
            setOpen(false)
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
            <DialogTrigger asChild>
                <Button>
                    Add user story
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[424px]'>
                <DialogHeader>
                    <DialogTitle>Create user story</DialogTitle>
                    <DialogDescription>
                        Please provide below details to create user story
                    </DialogDescription>
                </DialogHeader>
                <form action={dispatch} className='mt-6'>
                    <UserStoryForm error={state.validation} />
                    <div className='flex justify-end mt-4'>
                        <FormSubmitButton text='submit' />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
