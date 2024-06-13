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
import { IMember } from "@/models/models";

export default async function MembersTable({
    projectId,
    currentMember,
}: {
    projectId: string;
    currentMember: IMember;
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
                        {currentMember.role === "admin" ? (
                            <TableCell>
                                {member.role !== "admin" ? (
                                    <MemberRoleSelector member={member} />
                                ) : (
                                    <p className="font-semibold text-red-600"> {member.role}</p>
                                )}
                            </TableCell>
                        ) : (
                            <TableCell
                                className={`${member.role === "admin" && "text-red-600 font-semibold"
                                    }`}
                            >
                                {member.role}
                            </TableCell>
                        )}
                        <TableCell>
                            <MemberGroups
                                memberId={member.id}
                                projectId={projectId}
                                groups={groups}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
