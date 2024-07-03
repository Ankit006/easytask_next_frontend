import { getSprint } from '@/queries/queries';

interface Props {
    sprintId: number;
    projectId: number
}

export default async function SprintBar({ sprintId, projectId }: Props) {
    const res = await getSprint(sprintId)
    return (
        <div className='w-full flex items-center justify-between'>
            <div>
                <h1 className='text-xl font-semibold'>{res.title}</h1>
                <p className='text-xs mt-1'>{res.startDate} - {res.endDate}</p>
            </div>
        </div>
    )
}
