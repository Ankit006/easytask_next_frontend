import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getGroups, getMembers } from "@/queries/queries";
import MemberGroups from "./MemberGroups";
import MemberRoleSelector from "./MemberRoleSelector";

export default async function MembersTable({
    projectId,
}: {
    projectId: string;
}) {
    const members = await getMembers(projectId);
    const groups = await getGroups(projectId);
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Groups</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {members.map((member) => (
                    <TableRow key={member.id}>
                        <TableCell>{member.users.name}</TableCell>
                        <TableCell>{member.users.email}</TableCell>
                        <TableCell>
                            {member.role !== "admin" ? (
                                <MemberRoleSelector member={member} />
                            ) : (
                                <p className="font-semibold text-red-600"> {member.role}</p>
                            )}
                        </TableCell>
                        <TableCell>
                            <MemberGroups memberId={member.id} projectId={projectId} groups={groups} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
