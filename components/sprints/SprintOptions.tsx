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
import { Settings2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import SprintRemoveAlert from "./SprintRemoveAlert";
export default function SprintOptions({
    sprintId,
    projectId,
}: {
    sprintId: number;
    projectId: number;
}) {
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
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
                        <DropdownMenuItem>Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Assing backlogs</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setOpenDeleteAlert(true)}>
                            <button className="font-semibold text-red-500">Delete</button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <SprintRemoveAlert
                sprintId={sprintId}
                open={openDeleteAlert}
                projectId={projectId}
                onOpenChange={setOpenDeleteAlert}
            />
        </>
    );
}
