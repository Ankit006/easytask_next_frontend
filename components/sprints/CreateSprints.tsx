"use client";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import SprintForm from "./SprintForm"
import FormSubmitButton from "../custom/FormSubmitButton";
import { useFormState } from "react-dom";
import { createSprint } from "@/actions/sprintAction";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";



export default function CreateSprints({ projectId }: { projectId: number }) {
    const [state, dispatch] = useFormState(createSprint.bind(null, projectId), {});
    const [open, setOpen] = useState(false);
    const { toast } = useToast()
    useEffect(() => {
        if (state.message) {
            toast({
                title: state.message,
            })
            setOpen(false)
        }

        if (state.error) {
            toast({
                variant: "destructive",
                title: state.error
            })
        }
    }, [state, toast])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Create sprint</DialogTitle>
                    <DialogDescription>Please fill the below details to create a sprint</DialogDescription>
                </DialogHeader>
                <form action={dispatch} className="w-full flex flex-col space-y-4 mt-4">
                    <SprintForm error={state.validation} />
                    <div className="mt-4 flex justify-end">
                        <FormSubmitButton text="Submit" />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
