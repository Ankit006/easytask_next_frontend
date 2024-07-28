"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ISprint, IUserStory } from "@/models/models";
import { Settings2 } from "lucide-react";
import AssingSprintsDialog from "./AssingSprintsDialog";
import { useState } from "react";
import UserStoryUpdateDialog from "../backlog/UserStoryUpdateDialog";
import DeleteUserStory from "./DeleteUserStory";

export default function UserStoryOptions({
    userStory,
    sprints,
    projectId,
}: {
    userStory: IUserStory;
    sprints: ISprint[];
    projectId: number;
}) {
    const [openAssignDialog, setOpenAssignDialog] = useState(false);
    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <Settings2 className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48" align="end">
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setOpenAssignDialog(true)}>
                            Sprint assign
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setOpenUpdateDialog(true)}>
                            Update
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <DeleteUserStory userStoryId={userStory.id} projectId={projectId} />
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <AssingSprintsDialog
                userStoryId={userStory.id}
                sprints={sprints}
                open={openAssignDialog}
                setOpen={setOpenAssignDialog}
            />
            <UserStoryUpdateDialog
                userStory={userStory}
                projectId={projectId}
                open={openUpdateDialog}
                setOpen={setOpenUpdateDialog}
            />
        </>
    );
}
