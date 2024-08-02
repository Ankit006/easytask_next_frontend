import { getBacklogs, getSprints } from "@/queries/queries";
import UserStoryTable from "../userStory/UserStoryTable";

interface Props {
    projectId: number;
}

export default async function BacklogTable({ projectId }: Props) {
    const backlogs = await getBacklogs(projectId);
    const sprints = await getSprints(projectId);
    return (
        <UserStoryTable
            sprints={sprints}
            userStories={backlogs}
            projectId={projectId}
            type="backlogs"
        />
    );
}
