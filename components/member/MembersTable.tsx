import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getMembers } from "@/queries/queries";
import MemberRoleSelector from "./MemberRoleSelector";

export default async function MembersTable({
    projectId,
}: {
    projectId: string;
}) {
    const members = await getMembers(projectId);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
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
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
