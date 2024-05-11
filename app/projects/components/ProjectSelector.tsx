
import { Button } from "@/components/ui/button";
import { getProjects } from "@/queries/queries";
import { Plus } from "lucide-react";
import Link from "next/link";
import ProjectSelectorComponent from "./ProjectSelectorComponent";
export default async function ProjectSelector() {
    const projects = await getProjects();
    return (
        <div className="flex flex-col items-start">
            <ProjectSelectorComponent projects={projects} />
            <Link href="/projects/form">
                <Button className="w-48 mt-4">
                    <Plus className="mr-2" />
                    Add project
                </Button>
            </Link>
        </div>
    );
}
