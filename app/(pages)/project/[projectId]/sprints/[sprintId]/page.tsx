import { TableSkeleton } from "@/components/skeletons/skeletons";
// import UserStoryTable from "@/components/userStory/UserStoryTable";
import { Suspense } from "react";

export default async function page({
    params,
}: {
    params: { projectId: string; sprintId: string };
}) {
    return (
        <div>
            <div className="mt-20">
                {/* <Suspense fallback={<TableSkeleton />}>
                    <UserStoryTable
                        projectId={parseInt(params.projectId)}
                        sprintId={parseInt(params.sprintId)}
                    />
                </Suspense> */}
            </div>
        </div>
    );
}
