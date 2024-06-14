"use client"

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import UserStoryForm from './UserStoryForm'
import FormSubmitButton from '../custom/FormSubmitButton'
import { useFormState } from 'react-dom'
import { createUserStoryAction } from '@/actions/userStoryAction'

export default function CreateUserStoryDialog() {
    const [state, dispatch] = useFormState(createUserStoryAction, {})
    return (
        <Dialog>
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
