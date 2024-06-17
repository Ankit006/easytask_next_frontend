import { getBacklogs } from '@/queries/queries'
import React from 'react'
import BacklogCards from './BacklogCards'

interface Props {
    projectId: string
}

export default async function BacklogList({ projectId }: Props) {
    const backlogs = await getBacklogs(parseInt(projectId))
    return (
        <div>
            {backlogs.map((backlog) => <BacklogCards backlog={backlog} key={backlog.id} />)}
        </div>
    )
}
