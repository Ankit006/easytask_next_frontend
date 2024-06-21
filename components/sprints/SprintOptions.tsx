"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Settings2 } from 'lucide-react'
import { Button } from '../ui/button'
import DeleteSprint from "./DeleteSprint"
import { useState } from "react";
export default function SprintOptions() {
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false)
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <Settings2 className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-48' align='end'>
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Assing backlogs
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setOpenDeleteAlert(true)} >
                            <button className="font-semibold text-red-500">Delete</button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <DeleteSprint open={openDeleteAlert} onOpenChange={setOpenDeleteAlert} />
        </>
    )
}
