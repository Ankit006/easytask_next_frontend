import UserStoryCard from "@/components/userStory/UserStoryCard";
import { getSprintUserStories } from "@/queries/queries";

export default async function page({
    params,
}: {
    params: { projectId: string; sprintId: string };
}) {
    const userStories = await getSprintUserStories(
        parseInt(params.projectId),
        parseInt(params.sprintId)
    );
    return (
        <div>
            {userStories.length === 0 && (
                <p className="text-center mt-12 text-lg font-semibold">
                    {"No user story is assigned to this sprint ☹️"}
                </p>
            )}
            <div className="mt-20">
                {userStories.map((userStory) => (
                    <UserStoryCard userStory={userStory} key={userStory.id} />
                ))}
            </div>
        </div>
    );
}
