import Return from '@/components/custom/Return'
import SprintBar from '@/components/sprints/SprintBar'
import SprintSelectorContainer from '@/components/sprints/SprintSelectorContainer'
import React from 'react'

export default function page({ params }: { params: { projectId: string, sprintId: string } }) {

    return (
        <div>
            <Return />
            <div className='mt-8'>
                <SprintBar sprintId={parseInt(params.sprintId)} />
            </div>

        </div>
    )
}
