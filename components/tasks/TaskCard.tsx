import { ITask } from '@/models/models'
import React from 'react'
import { Card, CardContent } from '../ui/card'

interface Props {
    task: ITask
}

export default function TaskCard({ task }: Props) {
    return (
        <Card className='w-[250px]'>
            <CardContent className='p-4'>
                <p className='text-sm font-semibold'>{task.task}</p>
            </CardContent>
        </Card>
    )
}
