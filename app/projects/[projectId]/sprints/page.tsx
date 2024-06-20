import SprintSelectorContainer from '@/components/sprints/SprintSelectorContainer'

export default function Sprints({ params }: { params: { projectId: string } }) {
    return (
        <div>
            <SprintSelectorContainer projectId={parseInt(params.projectId)} />
        </div>
    )
}
