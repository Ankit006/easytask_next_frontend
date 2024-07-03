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

interface Props {
    projectId: number;
}

export default async function SprintTable({ projectId }: Props) {
    const sprints = await getSprints(projectId);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Start date</TableHead>
                    <TableHead>End date</TableHead>
                    <TableHead>Check</TableHead>
                    <TableHead>Options</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sprints.map((sprint) => (
                    <SprintTableItem
                        key={sprint.id}
                        projectId={projectId}
                        sprint={sprint}
                    />
                ))}
            </TableBody>
        </Table>
    );
}
