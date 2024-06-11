import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { getGroups } from "@/queries/queries";
import { UsersRound } from "lucide-react";
import GroupFrom from "./GroupFrom";
import GroupItem from "./GroupItem";

export default async function CreateGroup({
    projectId,
}: {
    projectId: string;
}) {
    const groups = await getGroups(projectId);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <UsersRound className="mr-2 w-4 h-4" />
                    Create group
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[424px]">
                <DialogHeader>
                    <DialogTitle>Create group</DialogTitle>
                </DialogHeader>
                <GroupFrom />
                <div className="flex flex-wrap space-x-3 items-center space-y-2">
                    {groups.map((group) => (
                        <GroupItem key={group.id} group={group} />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
