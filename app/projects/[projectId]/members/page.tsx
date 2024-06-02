import MembersTable from "@/components/member/MembersTable";
import RequestUser from "@/components/member/RequestUser";

export default function Members({ params }: { params: { projectId: string } }) {
    return (
        <div>
            <RequestUser />
            <div className="mt-12">
                <MembersTable projectId={params.projectId} />
            </div>
        </div>
    );
}
