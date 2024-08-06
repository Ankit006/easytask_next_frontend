"use client"

import { IUserStory } from '@/models/models'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';

export default function SprintUserStorySelectorComponent({ userStories, projectId, sprintId }: { userStories: IUserStory[], projectId: number, sprintId: number }) {
    const [userStoryId, setUserStoryId] = useState("");
    const route = useRouter();
    const params = useParams<{ userStoryId: string }>();

    useEffect(() => {
        if (params.userStoryId) {
            setUserStoryId(params.userStoryId)
        } else {
            setUserStoryId("")
        }
    }, [params])
    function handleChange(id: string) {
        setUserStoryId(id);
        if (id !== "") {
            route.push(`/projects/${projectId}/sprints/${sprintId}/${id}`)
        }
    }

    return (
        <div>
            <Select value={userStoryId} onValueChange={handleChange}>
                <SelectTrigger className='w-56'>
                    <SelectValue placeholder="Select user story" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>User story</SelectLabel>
                        {userStories.map((userStory) => <SelectItem key={userStory.id} value={`${userStory.id}`}>
                            <span className='text-sm truncate'>{userStory.title}</span>
                        </SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
