import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getSprints } from "@/queries/queries";
import SprintTableItem from "./SprintTableItem";
import { IMember } from "@/models/models";

interface Props {
    projectId: number;
    currentMember: IMember;
}

export default async function SprintTable({ projectId, currentMember }: Props) {
    const sprints = await getSprints(projectId);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Start date</TableHead>
                    <TableHead>End date</TableHead>
                    <TableHead>Check</TableHead>
                    {currentMember.role !== "member" && <TableHead>Options</TableHead>}
                </TableRow>
            </TableHeader>
            <TableBody>
                {sprints.map((sprint) => (
                    <SprintTableItem
                        key={sprint.id}
                        projectId={projectId}
                        sprint={sprint}
                        currentMember={currentMember}
                    />
                ))}
            </TableBody>
        </Table>
    );
}
