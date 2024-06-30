"use client"

import { ISprint } from "@/models/models";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import CreateSprints from "./CreateSprints";
import { useParams, useRouter } from "next/navigation";

interface Props {
    projectId: number;
    sprints: ISprint[]
}

export default function SprintSelector({ projectId, sprints }: Props) {
    const [sprintId, setSprintId] = useState("");
    const router = useRouter();
    const params = useParams<{ sprintId: string, projectId: string }>()


    useEffect(() => {
        if (params.sprintId) {
            setSprintId(params.sprintId)
        }
    }, [params])

    function onChange(sprintId: string) {
        if (sprintId !== "" && params.projectId !== "") {
            setSprintId(sprintId)
            router.push(`/projects/${params.projectId}/sprints/${sprintId}`)
        }
    }

    return (
        <div className="flex items-center space-x-2">
            <Select value={sprintId} onValueChange={onChange}>
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
