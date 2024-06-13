"use client"

import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { createProjectAction } from '@/actions/projectAction';
import { useFormState } from 'react-dom';
import ErrorText from '../custom/ErrorText';
import FormSubmitButton from '../custom/FormSubmitButton';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { useToast } from '../ui/use-toast';

export default function AddProjectDialog() {
    const [state, dispatch] = useFormState(createProjectAction, {});
    const [open, setOpen] = useState(false);
    const { toast } = useToast()

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.message
            })
            setOpen(false)
        }
    }, [state, toast])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="rounded text-sm">
                    <Plus className="h-3 w-3 mr-2" />
                    Add project
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[424px]'>
                <DialogHeader>
                    <DialogTitle>Create project</DialogTitle>
                    <DialogDescription>
                        Please provide the below details to create new project
                    </DialogDescription>
                </DialogHeader>
                <form action={dispatch} className="grid w-full items-center gap-8 py-4">
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="title">Project title</Label>
                        <Input
                            id="title"
                            name="title"
                            className="border-gray-300"
                            autoComplete="organization-title"
                        />
                        {state.error && state.error.title ? (
                            <ErrorText text={state.error.title[0]} />
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="description">Project description</Label>
                        <Textarea
                            id="description"
                            className="border-gray-300"
                            rows={8}
                            name="description"
                        />
                        {state.error && state.error.description ? (
                            <ErrorText text={state.error.description[0]} />
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <FormSubmitButton text="Submit" />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
