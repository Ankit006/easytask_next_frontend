import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { IMember, ISprint } from "@/models/models";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import SprintOptions from "./SprintOptions";

export default function SprintTableItem({
    sprint,
    projectId,
    currentMember,
}: {
    sprint: ISprint;
    projectId: number;
    currentMember: IMember;
}) {
    return (
        <TableRow key={sprint.id}>
            <TableCell>{sprint.title}</TableCell>
            <TableCell>{sprint.startDate}</TableCell>
            <TableCell>{sprint.endDate}</TableCell>
            <TableCell>
                <Link
                    href={`sprints/${sprint.id}`}
                    className="text-blue-500 font-semibold flex items-center space-x-2"
                >
                    <span>Check</span>
                    <MoveRight className="w-4 h-4" />
                </Link>
            </TableCell>
            {currentMember.role !== "member" && (
                <TableCell>
                    <SprintOptions projectId={projectId} sprint={sprint} />
                </TableCell>
            )}
        </TableRow>
    );
}
