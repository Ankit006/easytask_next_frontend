"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ISprint } from "@/models/models";
import { Settings2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import SprintDetailsDialog from "./SprintDetailsDialog";
import SprintRemoveAlert from "./SprintRemoveAlert";

export default function SprintOptions({
    projectId,
    sprint,
}: {
    projectId: number;
    sprint: ISprint;
}) {
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showAssignLogs, setShowAssignLogs] = useState(false);
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
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setShowDetails(true)}>
                            Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setShowAssignLogs(true)}>
                            Assing backlogs
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setOpenDeleteAlert(true)}>
                            <button className="font-semibold text-red-500">Delete</button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <SprintRemoveAlert
                sprintId={sprint.id}
                open={openDeleteAlert}
                projectId={projectId}
                onOpenChange={setOpenDeleteAlert}
            />

            <SprintDetailsDialog
                sprint={sprint}
                open={showDetails}
                onOpenChange={setShowDetails}
            />
        </>
    );
}
