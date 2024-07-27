import CreateSprints from "@/components/sprints/CreateSprints";
import SprintTable from "@/components/sprints/SprintTable";
import { getCurrentMember } from "@/queries/queries";

export default async function Sprints({
    params,
}: {
    params: { projectId: string };
}) {
    const member = await getCurrentMember(params.projectId);

    return (
        <div>
            {member.role !== "member" && (
                <CreateSprints projectId={parseInt(params.projectId)} />
            )}
            <div className="mt-12">
                <SprintTable
                    projectId={parseInt(params.projectId)}
                    currentMember={member}
                />
            </div>
        </div>
    );
}
