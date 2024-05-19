
import { Button } from "@/components/ui/button";
import { getProjects } from "@/queries/queries";
import { Plus } from "lucide-react";
import Link from "next/link";
import ProjectSelectorComponent from "./ProjectSelectorComponent";
export default async function ProjectSelector() {
    const projects = await getProjects();
    return (
        <div className="flex items-center space-x-2">
            <ProjectSelectorComponent projects={projects} />
            <Link href="/projects/form">
                <Button className="rounded">
                    <Plus />
                </Button>
            </Link>
        </div>
    );
}




