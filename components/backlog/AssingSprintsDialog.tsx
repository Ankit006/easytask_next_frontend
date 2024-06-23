import { getSprints } from "@/queries/queries";
import { Plus } from "lucide-react";
import FormSubmitButton from "../custom/FormSubmitButton";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

export default async function AssingSprintsDialog({
    projectId,
}: {
    projectId: number;
}) {
    const sprints = await getSprints(projectId);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="font-bold text-blue-500 flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Assign
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-96">
                <DialogHeader>
                    <DialogTitle>Sprints</DialogTitle>
                </DialogHeader>
                <form className="flex items-center space-x-4">
                    <Select name="sprintId">
                        <SelectTrigger className="w-60">
                            <SelectValue placeholder="Select a sprint" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Sprints</SelectLabel>
                                {sprints.map((sprint) => (
                                    <SelectItem key={sprint.id} value={`${sprint.id}`}>
                                        {sprint.title}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <FormSubmitButton text="Assign" />
                </form>
            </DialogContent>
        </Dialog>
    );
}
