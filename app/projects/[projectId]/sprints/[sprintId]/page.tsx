import Return from '@/components/custom/Return'
import SprintBar from '@/components/sprints/SprintBar'

export default function page({ params }: { params: { projectId: string, sprintId: string } }) {

    return (
        <div>
            <Return />
            <div className='mt-8'>
                <SprintBar sprintId={parseInt(params.sprintId)} projectId={parseInt(params.projectId)} />
            </div>

        </div>
    )
}
