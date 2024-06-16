import CreateUserStoryDialog from '@/components/backlog/CreateUserStoryDialog'
import React from 'react'

export default function Backlogs({ params }: { params: { projectId: string } }) {
    return (
        <div>
            <CreateUserStoryDialog projectId={parseInt(params.projectId)} />
        </div>
    )
}
