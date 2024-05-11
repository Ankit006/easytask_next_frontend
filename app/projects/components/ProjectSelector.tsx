import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getProjects } from "@/queries/queries";
import { Plus } from "lucide-react";
import Link from "next/link";
export default async function ProjectSelector() {
    const projects = await getProjects();
    return (
        <div className="flex flex-col items-start">
            <Select>
                <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Projects</SelectLabel>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Link href="/projects/form">
                <Button className="w-48 mt-4">
                    <Plus className="mr-2" />
                    Add project
                </Button>
            </Link>
        </div>
    );
}
