import Return from '@/components/custom/Return'
import SprintBar from '@/components/sprints/SprintBar'
import SprintUserStories from '@/components/sprints/SprintUserStories'

export default function page({ params }: { params: { projectId: string, sprintId: string } }) {

    return (
        <div>
            <Return />
            <div className='mt-8'>
                <SprintBar sprintId={parseInt(params.sprintId)} projectId={parseInt(params.projectId)} />
            </div>
            <div className='mt-12'>
                <SprintUserStories sprintId={parseInt(params.sprintId)} />
            </div>
        </div>
    )
}
