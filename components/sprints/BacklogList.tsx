import { IUserStory } from '@/models/models';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import PriorityViewer from '../custom/PriorityViewer';
import { Plus } from 'lucide-react';


interface Props {
    backlogList: IUserStory[]

}

export default function BacklogList({ backlogList }: Props) {
    return (
        <div>
            <h1 className='text-lg font-semibold'>Backlogs</h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >Title</TableHead>
                        <TableHead>Prority</TableHead>
                        <TableHead>Estimate date</TableHead>
                        <TableHead>Assign</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {backlogList.map((data) => <BackLog key={data.id} backlog={data} />)}
                </TableBody>
            </Table>
        </div>
    )
}


function BackLog({ backlog }: { backlog: IUserStory }) {
    return <TableRow>
        <TableCell>{backlog.title}</TableCell>
        <TableCell>
            <PriorityViewer priority={backlog.priority} />
        </TableCell>
        <TableCell>{backlog.estimateDate}</TableCell>
        <TableCell className='w-24'>
            <button className='flex items-center text-blue-500 font-bold'>
                <Plus className='w-4 h-4 mr-1 ' /> assign</button>
        </TableCell>
    </TableRow>
}
