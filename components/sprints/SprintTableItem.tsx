import React from 'react'
import { TableCell, TableRow } from '../ui/table'
import { ISprint } from '@/models/models'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import SprintOptions from './SprintOptions'

export default function SprintTableItem({ sprint, projectId }: { sprint: ISprint, projectId: number }) {
    return (
        <TableRow key={sprint.id}>
            <TableCell>{sprint.title}</TableCell>
            <TableCell>{sprint.startDate}</TableCell>
            <TableCell>{sprint.endDate}</TableCell>
            <TableCell >
                <Link href={`sprints/${sprint.id}`} className="text-blue-500 font-semibold flex items-center space-x-2">
                    <span>Check</span>
                    <MoveRight className="w-4 h-4" />
                </Link>
            </TableCell>
            <TableCell>
                <SprintOptions projectId={projectId} sprint={sprint} />
            </TableCell>
        </TableRow>
    )
}
