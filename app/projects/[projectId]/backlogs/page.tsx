import BacklogList from '@/components/backlog/BacklogList'
import CreateUserStoryDialog from '@/components/backlog/CreateUserStoryDialog'
import React from 'react'

export default function Backlogs({ params }: { params: { projectId: string } }) {
    return (
        <div>
            <CreateUserStoryDialog projectId={parseInt(params.projectId)} />
            <div className='mt-16'>
                <BacklogList projectId={params.projectId} />
            </div>
        </div>
    )
}
