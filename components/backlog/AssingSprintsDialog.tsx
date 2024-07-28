import { getSprints } from "@/queries/queries";
import { Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import AssignSprintForm from "./AssignSprintForm";

export default async function AssingSprintsDialog({
    projectId,
    userStoryId
}: {
    projectId: number;
    userStoryId: number
}) {
    const sprints = await getSprints(projectId);
    return (
        <AssignSprintForm backlogId={userStoryId} sprints={sprints} />
    );
}
