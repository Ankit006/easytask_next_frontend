import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from "@/components/ui/button"
import { Settings2 } from 'lucide-react'
import AssingSprintsDialog from '../backlog/AssingSprintsDialog'

export default function UserStoryOptions({ projectId, userStoryId }: { projectId: number, userStoryId: number }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Settings2 className='w-4 h-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-48' align='end'>
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <AssingSprintsDialog userStoryId={userStoryId} projectId={projectId} />
                    </DropdownMenuItem>
                    <DropdownMenuItem>Update</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
