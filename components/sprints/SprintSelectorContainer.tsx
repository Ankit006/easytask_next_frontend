import React from 'react'
import SprintSelector from './SprintSelector'
import { getSprints } from '@/queries/queries'


interface Props {
    projectId: number
}


export default async function SprintSelectorContainer({ projectId }: Props) {
    const sprints = await getSprints(projectId)
    return (
        <SprintSelector projectId={projectId} sprints={sprints} />
    )
}
