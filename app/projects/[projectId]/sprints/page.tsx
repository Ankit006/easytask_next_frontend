import CreateSprints from "@/components/sprints/CreateSprints";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getSprints } from "@/queries/queries";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default async function Sprints({
    params,
}: {
    params: { projectId: string };
}) {
    const sprints = await getSprints(parseInt(params.projectId));
    return (
        <div>
            <CreateSprints projectId={parseInt(params.projectId)} />
            <Table className="mt-8">
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Start date</TableHead>
                        <TableHead>End date</TableHead>
                        <TableHead>Check</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sprints.map((sprint) => (
                        <TableRow key={sprint.id}>
                            <TableCell>{sprint.title}</TableCell>
                            <TableCell>{sprint.startDate}</TableCell>
                            <TableCell>{sprint.endDate}</TableCell>
                            <TableCell >
                                <Link href={`sprints/${sprint.id}`} className="text-blue-500 font-semibold flex items-center space-x-2">
                                    <span>Check</span>
                                    <MoveRight className="w-4 h-4" />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
