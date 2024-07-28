import { ISprint, IUserStory } from "@/models/models";
import React from "react";
import {
    Table,
    TableBody,
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
}: {
    userStories: IUserStory[];
    sprints: ISprint[];
    projectId: number;
}) {
    return (
        <Table>
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
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
