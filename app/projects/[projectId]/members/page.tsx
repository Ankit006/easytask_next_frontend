import MembersTable from "@/components/member/MembersTable";

export default function Members({ params }: { params: { projectId: string } }) {
    return (

        <div className="mt-12">
            <MembersTable projectId={params.projectId} />
        </div>

    );
}
