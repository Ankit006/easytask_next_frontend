import { getSprint } from '@/queries/queries';
import React from 'react'
import SprintOptions from './SprintOptions';

interface Props {
    sprintId: number;
}

export default async function SprintBar({ sprintId }: Props) {
    const res = await getSprint(sprintId)
    return (
        <div className='w-full flex items-center justify-between'>
            <div>
                <h1 className='text-2xl font-semibold'>{res.title}</h1>
                <p className='text-xs mt-1'>{res.startDate} - {res.endDate}</p>
            </div>
            <div>
                <SprintOptions />
            </div>
        </div>
    )
}
