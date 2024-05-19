"use client";

import { redirectProjectAction } from "@/actions/actions";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { IProject } from "@/models/models";
import { useEffect, useState } from "react";

interface Props {
    projects: IProject[];
}

export default function ProjectSelectorComponent({ projects }: Props) {
    const [projectId, setProjectId] = useState("");

    useEffect(() => {
        if (projectId !== "") {
            const formData = new FormData();
            formData.append("projectId", projectId);
            redirectProjectAction(formData)
        }
    }, [projectId])

    return (
        <form>
            <Select name="projectId" value={projectId} onValueChange={setProjectId}>
                <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Projects</SelectLabel>
                        {projects.map((project) => (
                            <SelectItem key={project.id} value={`${project.id}`}>
                                <button type="submit"> {project.title}</button>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </form>
    );
}
