import { ITask } from '@/models/models'
import React from 'react'
import PriorityViewer from '../custom/PriorityViewer'
import { Card, CardContent } from '../ui/card'

interface Props {
    task: ITask
    onDragStart: (ev: React.DragEvent<HTMLDivElement>) => void
}

export default function TaskCard({ task, onDragStart }: Props) {
    return (
        <Card className='w-[250px]' id={`${task.id}`} draggable onDragStart={onDragStart} >
            <CardContent className='p-4'>
                <p className='text-sm font-semibold'>{task.task}</p>
                <PriorityViewer className='text-xs mt-1' priority={task.priority} />
            </CardContent>
        </Card>
    )
}
