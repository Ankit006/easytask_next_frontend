import CreateSprints from "@/components/sprints/CreateSprints";
import SprintTable from "@/components/sprints/SprintTable";

export default function Sprints({
    params,
}: {
    params: { projectId: string };
}) {
    return (
        <div>
            <CreateSprints projectId={parseInt(params.projectId)} />
            <div className="mt-12">
                <SprintTable projectId={parseInt(params.projectId)} />
            </div>
        </div>
    );
}
