import BacklogList from '@/components/backlog/BacklogList'
import BacklogTable from '@/components/backlog/BacklogTable'
import CreateUserStoryDialog from '@/components/backlog/CreateUserStoryDialog'
import React from 'react'

export default function Backlogs({ params }: { params: { projectId: string } }) {
    return (
        <div>
            <CreateUserStoryDialog projectId={parseInt(params.projectId)} />
            <div className='mt-16'>
                <BacklogTable projectId={parseInt(params.projectId)} />
            </div>
        </div>
    )
}
