import { TableSkeleton } from "@/components/skeletons/skeletons";
import UserStoryTableContainer from "@/components/userStory/UserStoryTableContainer";

import { Suspense } from "react";

export default async function page({
    params,
}: {
    params: { projectId: string; sprintId: string };
}) {
    return (
        <div>
            <div className="mt-20">
                <Suspense fallback={<TableSkeleton />}>
                    <UserStoryTableContainer
                        projectId={parseInt(params.projectId)}
                        sprintId={parseInt(params.sprintId)}
                    />
                </Suspense>
            </div>
        </div>
    );
}
