import { ITask } from '@/models/models'
import React from 'react'
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
            </CardContent>
        </Card>
    )
}
