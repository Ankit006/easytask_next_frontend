import { getSprints, getSprintUserStories } from "@/queries/queries";
import UserStoryTable from "./UserStoryTable";

export default async function UserStoryTableContainer({
    projectId,
    sprintId,
}: {
    projectId: number;
    sprintId: number;
}) {
    const res = await getSprintUserStories(projectId, sprintId);
    const sprints = await getSprints(projectId)
    return (
        <UserStoryTable sprints={sprints} userStories={res} />
    );
}
