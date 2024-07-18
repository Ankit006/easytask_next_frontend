import { getSprintUserStories } from "@/queries/queries";
import React from "react";
import SprintUserStorySelectorComponent from "./SprintUserStorySelectorComponent";

export default async function SprintUserStorySelector({
    sprintId,
    projectId,
}: {
    sprintId: number;
    projectId: number;
}) {
    const userStories = await getSprintUserStories(projectId, sprintId);
    return (
        <div>
            <SprintUserStorySelectorComponent
                userStories={userStories}
                projectId={projectId}
                sprintId={sprintId}
            />
        </div>
    );
}
