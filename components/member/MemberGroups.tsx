import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IGroup } from "@/models/models";
import { getAssignedGroups } from "@/queries/queries";
import { Eye } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import MemberGroupAssing from "./MemberGroupAssing";
import AssignedGroupItem from "./AssignedGroupItem";

interface Props {
    memberId: number;
    projectId: string;
    groups: IGroup[];
}

export default async function MemberGroups({
    memberId,
    projectId,
    groups,
}: Props) {
    const assignedGroups = await getAssignedGroups(memberId);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Eye className="w-5 h-5 cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
                <MemberGroupAssing groups={groups} projectId={parseInt(projectId)} memberId={memberId} />

                {assignedGroups.length === 0 && (
                    <p className="text-sm mt-3 text-center">No group assigned</p>
                )}
                <div className="flex flex-wrap space-x-3 items-center space-y-2">
                    {assignedGroups.map((group) => <AssignedGroupItem key={group.id} group={group} memberId={memberId} />)}
                </div>
            </DialogContent>
        </Dialog>
    );
}
