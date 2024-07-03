import CreateTask from '@/components/tasks/CreateTask'
import { getTasks } from '@/queries/queries'
import React from 'react'

export default async function page({ params }: { params: { userStoryId: string, projectId: string } }) {
    const tasks = await getTasks(parseInt(params.userStoryId))
    return (
        <div>
            <CreateTask userStoryId={parseInt(params.userStoryId)} projectId={parseInt(params.projectId)} />
        </div>
    )
}