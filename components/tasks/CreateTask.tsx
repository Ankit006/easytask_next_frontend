"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from 'lucide-react'
import PrioritySelector from '../custom/PrioritySelector'
import StatusSelector from '../custom/StatusSelector'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import FormSubmitButton from "../custom/FormSubmitButton"
import { useFormState } from "react-dom"
import { createTaskAction } from "@/actions/taskAction"
import ErrorText from "../custom/ErrorText"
import { useEffect, useState } from "react"
import { useToast } from "../ui/use-toast"

interface Props {
    userStoryId: number;
    projectId: number
}

export default function CreateTask({ userStoryId, projectId }: Props) {
    const [state, dispatch] = useFormState(createTaskAction.bind(null, userStoryId, projectId), {})
    const [open, setOpen] = useState(false)
    const { toast } = useToast()
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
                <Button>
                    <Plus className='mr-2' />
                    Create task
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[500px]'>
                <DialogHeader>
                    <DialogTitle>Create Task</DialogTitle>
                    <DialogDescription>Please provide the below details to create a task</DialogDescription>
                </DialogHeader>
                <form className='flex flex-col space-y-8 py-4' action={dispatch}>
                    <div className="flex flex-col space-y-2">
                        <Label>Task</Label>
                        <Textarea name='task' />
                        {state.validation?.task && <ErrorText text={state.validation.task[0]} />}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <Label>Priority</Label>
                        <PrioritySelector name='priority' />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label>Status</Label>
                        <StatusSelector name='status' />
                    </div>
                    <div className="flex justify-end">
                        <FormSubmitButton text="Submit" />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
