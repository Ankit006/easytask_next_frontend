
import { getProjects } from "@/queries/queries";
import AddProjectDialog from "./AddProjectDialog";
import ProjectSelectorComponent from "./ProjectSelectorComponent";
export default async function ProjectSelector() {
    const projects = await getProjects();
    return (
        <div className="flex items-center space-x-2">
            <ProjectSelectorComponent projects={projects} />
            <AddProjectDialog />
        </div>
    );
}




