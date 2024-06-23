import { ISprint } from '@/models/models'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import React from 'react'


interface Props {
    sprint: ISprint
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SprintDetailsDialog({ sprint, open, onOpenChange }: Props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='sm:max-w-[500px]'>
                <DialogHeader>
                    <DialogTitle>{sprint.title}</DialogTitle>
                    <DialogDescription>{sprint.description}</DialogDescription>
                </DialogHeader>
                <p className={`text-xs ${sprint.description && "mt-6"}`}>{sprint.startDate} / {sprint.endDate}</p>
            </DialogContent>
        </Dialog>
    )
}
