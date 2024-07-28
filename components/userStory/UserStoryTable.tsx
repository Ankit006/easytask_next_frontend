import { getSprintUserStories } from "@/queries/queries";
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import PriorityViewer from "../custom/PriorityViewer";

export default async function UserStoryTable({
    projectId,
    sprintId,
}: {
    projectId: number;
    sprintId: number;
}) {
    const res = await getSprintUserStories(projectId, sprintId);
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Estimate date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {res.map((story) => (
                        <TableRow key={story.id}>
                            <TableCell>{story.title}</TableCell>
                            <TableCell>
                                <PriorityViewer priority={story.priority} />
                            </TableCell>
                            <TableCell>{story.status}</TableCell>
                            <TableCell>{story.estimateDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
