import { ISprint, IUserStory } from "@/models/models";
import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import PriorityViewer from "@/components/custom/PriorityViewer";
import UserStoryOptions from "./UserStoryOptions";

export default function UserStoryTable({
    userStories,
    sprints,
    projectId,
    type,
    currentSprintId
}: {
    userStories: IUserStory[];
    sprints: ISprint[];
    projectId: number;
    currentSprintId?: number;
    type: "backlogs" | "user stories"
}) {
    return (
        <Table>
            <TableCaption>
                {type === "backlogs" ? "List of Backlogs" : "List of User Stories"}
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Estimate date</TableHead>
                    <TableHead>Options</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {userStories.map((story) => (
                    <TableRow key={story.id}>
                        <TableCell>{story.title}</TableCell>
                        <TableCell>
                            <PriorityViewer priority={story.priority} />
                        </TableCell>
                        <TableCell>{story.estimateDate}</TableCell>
                        <TableCell>
                            <UserStoryOptions
                                projectId={projectId}
                                sprints={sprints}
                                userStory={story}
                                type={type}
                                currentSprintId={currentSprintId}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
