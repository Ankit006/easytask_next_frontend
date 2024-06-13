import MembersTable from "@/components/member/MembersTable";
import RequestUser from "@/components/member/RequestUser";
import CreateGroup from "@/components/member/CreateGroup";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getCurrentMember } from "@/queries/queries";

export default async function Members({ params }: { params: { projectId: string } }) {
    const currentMember = await getCurrentMember(params.projectId)


    return (
        <div className="mt-12">
            <div className="flex items-center justify-end space-x-4 mb-12">
                <Suspense fallback={<Skeleton className="w-32 h-10 rounded-md" />}>
                    <CreateGroup projectId={params.projectId} />
                </Suspense>
                {currentMember.role === "admin" && <RequestUser />}
            </div>
            <MembersTable projectId={params.projectId} currentMember={currentMember} />
        </div>

    );
}
