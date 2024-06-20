"use client"

import { ISprint } from "@/models/models";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import CreateSprints from "./CreateSprints";
import { useRouter } from "next/navigation";

interface Props {
    projectId: number;
    sprints: ISprint[]
}

export default function SprintSelector({ projectId, sprints }: Props) {
    const [sprintId, setSprintId] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (sprintId !== "") {
            const path = window.location.pathname;
            router.push(`${path}/${sprintId}`)

        }
    }, [sprintId, router])

    return (
        <div className="flex items-center space-x-2">
            <Select value={sprintId} onValueChange={setSprintId}>
                <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select sprint" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Sprints</SelectLabel>
                        {sprints.map((sprint) => <SelectItem key={sprint.id} className="truncate text-sm" value={`${sprint.id}`}>
                            {sprint.title}
                        </SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <CreateSprints projectId={projectId} />
        </div>
    )
}
