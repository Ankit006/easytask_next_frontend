import CurrentMemberSkeleton from "@/loaders/CurrentMemberSkeleton";
import CurrentMember from "./component/CurrentMember";
import { Suspense } from "react";

export default function Project({ params }: { params: { projectId: string } }) {
    const projectId = params.projectId;

    return (
        <div className="flex justify-end mb-12">
            <Suspense fallback={<CurrentMemberSkeleton />}>
                <CurrentMember projectId={projectId} />
            </Suspense>
        </div>
    );
}
