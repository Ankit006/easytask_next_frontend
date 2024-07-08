import CreateTask from '@/components/tasks/CreateTask'
import TaskViewer from '@/components/tasks/TaskViewer'
import { getTasks } from '@/queries/queries'
import React from 'react'

export default async function page({ params }: { params: { userStoryId: string, projectId: string } }) {
    const tasks = await getTasks(parseInt(params.userStoryId))
    return (
        <div>
            <CreateTask userStoryId={parseInt(params.userStoryId)} projectId={parseInt(params.projectId)} />
            <div className='mt-12 overflow-x-scroll'>
                <TaskViewer tasks={tasks} />
            </div>
        </div>
    )
}
